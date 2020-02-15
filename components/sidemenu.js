import React from 'react';
import Link from 'next/link';

const formatDateTime = (sdate) => {
    return (new Date(sdate)).toLocaleString('jp-JP', { dateStyle: 'medium' });
}

const SideMenu = (props) => {
    const blogs = props.contents || [];
    return (
        <>
        <article className="side-menu">
            <section>
            <h2>Contents |</h2>
            
            <ul>
                {
                    blogs.map((item, index) => {
                        //console.log(item)
                        return (
                            <li key={index}>
                                <Link href={'/blog/[slug].js'} as={`/blog/${item.slug}`}>
                                <a title={item.document.data.title}>
                                { item.document.data.title }
                                </a>
                                </Link>
                                <p>
                                    <span>by { item.document.data.author }</span>
                                    ,&nbsp;<span>{ formatDateTime(item.document.data.date) }</span>
                                </p>                            
                            </li>
                        )
                    })
                }
            </ul>
            </section>
        </article>
        <style jsx>
            {`            
            .side-menu {
                background-color: gold;
                position: relative;
                width: 30%;
                min-height: 900px;
                display: inline-block;
                vertical-align: top;
                z-index: 3;
                float: right;
            }
            .side-menu * {
                color: #222;
            }
            h1 {
                margin: 25px 10px 25px 15px;
                padding: 0px;
            }
            h2 {
                margin: 25px 10px 25px 15px;
                padding: 0px;
            }
            p {
                font-family: 'Meiryo','Hiragino Kaku Gothic Pro';
                line-height: 140%;
                text-align: left;
                margin: 0px;
                padding: 0px;
                text-indent: 0;
                font-size: 0.8em;
                font-style: italic;             
            }

            li {
                margin: 10px 15px 0px 0px;
                padding: 0px 0px 0px 0px;
            }
            a {
                font-size: 0.9em;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }

            @media only screen and (max-width : 640px) {
                .side-menu {
                    width: 100%;
                    min-height: 200px;
                    padding-bottom: 20px;
                }
            }
            `}
        </style>
        </>
    )
}
export default SideMenu;