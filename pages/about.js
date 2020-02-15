import React, { useEffect } from 'react';
import { scrollHandler } from '../global/settings';

const layout = {
    banner: {
        top: 50,
        height: 150
    },
    main: {
        top: 50
    }
};

const About = (props) => {
    
    useEffect(()=>{
        const siteTitle = process.env.SiteTitle || 'NextJS';
        document.title = siteTitle + ' | About Page';
    })
    
    return (
        <>
        <main>
            <article>
                <h1>About Page</h1>
                <section>
                    <p>
                    Hammer out. 
                    Deploy that's not on the roadmap or it's about managing expectations scope creep. 
                    Locked and loaded. 
                    Cloud strategy screw the pooch great plan! 
                    let me diarize this, and we can synchronise ourselves at a later timepoint what the but talk to the slides. 
                    Granularity. 
                    Peel the onion driving the initiative forward, for vec those options are already baked in with this model. 
                    Vertical integration i am dead inside nor back of the net screw the pooch minimize backwards overflow.
                    </p>
                    <p>
                    Hammer out. 
                    Deploy that's not on the roadmap or it's about managing expectations scope creep. 
                    Locked and loaded. 
                    Cloud strategy screw the pooch great plan! 
                    let me diarize this, and we can synchronise ourselves at a later timepoint what the but talk to the slides. 
                    Granularity. 
                    Peel the onion driving the initiative forward, for vec those options are already baked in with this model. 
                    Vertical integration i am dead inside nor back of the net screw the pooch minimize backwards overflow.
                    </p>
                </section>
            </article>
        </main>
        <script dangerouslySetInnerHTML={{__html: scrollHandler()}} />
        <style jsx>
            {`
            main {
                background-color: white;
                margin-top: ${layout.main.top}px;
                padding-bottom: 20px;
            }
            .contents {
                background-color: white;
                position: relative;
                width: 70%;
                display: inline-block;
                vertical-align: top;
                z-index: 2;
                float: right;
            }
            .contents * {                
                color: #222;
            }
            article {
                background-color: white;
                padding-top: 50px;
                margin: 0px 20px;
            }
            section {
                background-color: white;
                padding: 10px;
            }
            h1 {
                padding-top: 20px;
                margin-top: 0px;
            }
            h2 {
                margin: 0px;
                padding: 0px;
            }
            p {
                font-family: 'Helvetica';
                margin: 25px 10px 25px 15px;
                padding: 0px;
                text-indent: 1em;
                line-height: 140%; 
            }

            `}
        </style>
        </>
    )
}
export default About;