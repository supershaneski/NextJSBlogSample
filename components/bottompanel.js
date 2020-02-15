import Link from 'next/link';
const BottomPanel = (props) => {
    
    const posts = props.contents;
    const selected = props.selected;

    let prev_slug = "";
    let prev_title = "";
    let next_slug = "";
    let next_title = "";
    
    let length_mode = 'short';
    if(posts.length > 1) {
        posts.some((item, index) => {        
            if(item.slug === selected) {
                if(index === 0) {
                    prev_title = posts[index + 1].document.data.title;
                    prev_slug = posts[index + 1].slug;
                    length_mode = 'long';
                } else if(index === posts.length - 1) {
                    next_title = posts[index - 1].document.data.title;
                    next_slug = posts[index - 1].slug;
                    length_mode = 'long';
                } else {
                    next_title = posts[index - 1].document.data.title;
                    next_slug = posts[index - 1].slug;
                    prev_title = posts[index + 1].document.data.title;
                    prev_slug = posts[index + 1].slug;
                } 
                return true;
            }
        })
    }

    return (
        <>
        <section>
            {
                prev_slug && <div className={`left ${length_mode}`}>
                Previous:&nbsp;
                <Link href={`/blog/[slug].js`} as={`/blog/${prev_slug}`}>
                    <a title={prev_title}>{prev_title}</a>
                </Link>
                </div>
            }
            {
                next_slug && <div className={`right ${length_mode}`}>
                Next:&nbsp;
                <Link href={`/blog/[slug].js`} as={`/blog/${next_slug}`}>
                    <a title={next_title}>{next_title}</a>
                </Link>
                </div>
            }
        </section>
        <style jsx>
            {`            
            section {
                padding: 10px 20px 40px 20px;
            }
            section div {
                color: #222;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            section div.hide {
                display: none;
            }
            section div.left{
                float: left;
            }
            section div.right{
                text-align: right;
                float: right;
            }
            section div.red {
                background-color: red;
            }
            section div.blue {
                background-color: blue;
            }
            section div.short {
                width: 40%;
            }
            section div.long {
                width: 80%;
            }
            a {
                color: #222;
            }
            `}
        </style>
        </>        
    )
}
export default BottomPanel;