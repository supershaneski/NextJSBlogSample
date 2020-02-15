import React from 'react';
import ReactMarkdown from 'react-markdown';
const BlogContent = (props) => {
    const stitle = props.title;
    const sauthor = props.author;
    const sdate = props.date;
    const scontents = props.contents;
    return (
        <>
        <h1>{ stitle }</h1>
        <section className="author-container">
        <p className="author">by { sauthor }</p>
        <p className="date">{ (new Date(sdate)).toLocaleString('jp-JP', { dateStyle: 'medium' }) }</p>
        </section>
        <section className="markdown">
            <ReactMarkdown source={scontents} />
        </section>
        <style jsx>
            {`
            section {
                background-color: white;
                margin: 2px;
                color: #222;
            }
            section.markdown {
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
            `}
        </style>
        </>
    )
}
export default BlogContent;