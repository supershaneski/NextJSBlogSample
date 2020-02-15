import React, { useEffect } from 'react';
import ErrorPage from 'next/error';
import matter from 'gray-matter';
import Banner from '../../components/banner';
import SideMenu from '../../components/sidemenu';
import BottomPanel from '../../components/bottompanel';
import BlogContent from '../../components/blogcontent';
import { scrollHandler } from '../../global/settings';

const layout = {
    banner: {
        top: 50,
        height: 200
    },
    main: {
        top: 250
    }
};

const Page = (props) => {
    
    const selected = props.query.slug;
    const recent = props.contents.filter((item, index) => {
        return (item.slug === selected)
    })
    
    if(recent.length === 0) {
        return <ErrorPage statusCode={404} />
    }

    const stitle = recent.length > 0?recent[0].document.data.title:"Untitled";
    const sauthor = recent.length > 0?recent[0].document.data.author:"Nonamae";
    const sdate = recent.length > 0?recent[0].document.data.date:new Date('2001-07-26');
    const scontents = recent.length > 0?recent[0].document.content:"Loremp ipsum dolor";
    const simage = recent.length > 0?recent[0].document.data.hero_image:"404.jpg";

    useEffect(() => {
        const siteTitle = process.env.SiteTitle || 'NextJS';
        document.title = siteTitle + ' | ' + stitle;
    })

    return (
        <>
        <Banner height={layout.banner.height} top={layout.banner.top} src={`/images/${simage}`} />
        <main>
            
            <article className="contents">
                <BlogContent title={stitle} author={sauthor} date={sdate} contents={scontents} />
                <BottomPanel selected={selected} contents={props.contents} />
            </article>
            
            <SideMenu contents={props.contents} />

        </main>
        <script dangerouslySetInnerHTML={{__html: scrollHandler()}} />
        <style jsx>
            {`
            main {
                background-color: white;
                margin-top: ${layout.main.top}px;
                
            }
            .contents {
                background-color: white;
                position: relative;
                width: 70%;
                min-height: 600px;
                display: inline-block;
                vertical-align: top;
                z-index: 2;
                float: right;
            }
            .contents * {                
                color: #222;
            }
            .contents section {
                background-color: white;
                margin: 2px;
            }
            .contents section.markdown {
                background-image: url('/images/end-mark.png');
                background-repeat: no-repeat;
                background-position: bottom;
                background-size: 60px;
                padding-bottom: 5%;
                margin-bottom: 20px;
            }

            h1 {
                margin: 25px 10px 5px 15px;
                padding: 0px;
            }
            h2 {
                margin: 25px 10px 25px 15px;
                padding: 0px;
            }
            p {
                font-family: 'Helvetica';
                margin: 25px 10px 25px 15px;
                padding: 0px;
                text-indent: 1em;
                line-height: 140%;                
            }
            
            .author-container {
                position: relative;
            }
            .author-container .author{
                font-family: serif;
                font-style: italic;
                text-indent: 0;
                margin: 0px 10px 0px 15px;
                float: left;
            }
            .author-container .date{
                font-family: serif;
                font-style: italic;
                text-indent: 0;
                text-align: right;
                margin: 25px 10px 25px 15px;
            }
            
            @media only screen and (max-width : 640px) {
                .contents {
                    width: 100%;
                }
            }
            `}
        </style>
        </>
    )
}
Page.getInitialProps = async function(ctx) {
    const posts = (context => {
        const keys = context.keys();
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const slug = key
              .replace(/^.*[\\\/]/, '')
              .split('.')
              .slice(0, -1)
              .join('.')
            const value = values[index]
            const document = matter(value.default)
            return {
              document,
              slug,
            }
        });
        return data;
    })(require.context('../../contents', true, /\.md$/))

    // sort to most recent
    posts.sort((a, b) => {
        const d0 = new Date(a.document.data.date);
        const d1 = new Date(b.document.data.date);
        return d0 > d1 ? -1: d0 < d1 ? 1: 0;
    });

    // test here
    /*
    const isExist = posts.some((item) => {
        return (item.slug === ctx.query.slug)
    })
    if(!isExist) {
        if (ctx.res) {
            ctx.res.statusCode = 404;
            ctx.res.end();
            return
         }
    }
    */
    
    return {
        query: ctx.query,
        contents: posts
    }
}
export default Page;