import React from 'react';
import Link from 'next/link';

export default function Header(props) {
    const pages = [
        { name: 'Home', route: '/'},
        { name: 'About', route: '/about'}
    ];
    
    const siteTitle = process.env.SiteTitle || 'NextJS';

    return (
        <>
        <header id="app-header">
            
            <div id="banner">
                <img id="logo" src={`/logo192.png`} />
                <h1 id="banner-name">{ siteTitle }</h1>
            </div>
            
            <div id="header-nav">
                <ul>
                    {
                        pages.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={`${item.route}`} as={`${item.route}`}>
                                        <a title={item.name}>{ item.name }</a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
        <style jsx>
            {`
            header {
                background: #282c34;
                position: fixed;
                width: 100%;
                height: 100px;
                z-index: 10;
                transition: 0.2s;
            }

            #banner {
                position: absolute;
                left: 10px;
                top: 10%;
                height: 80%;
                z-index: 1;
            }
            #banner-name {
                position: absolute;
                left: 90px;
                top: 0px;
                color: #fff;
            }
            
            #logo {
                height: 100%;
            }

            #header-nav {
                position: absolute;
                left: 95px;
                bottom: 5px;
                width: 200px;
                height: 25px;
            }

            ul {
                position: absolute;
                left: 0px;
                bottom: 0px;
                margin: 0px;
                padding: 0px;
                z-index: 2;
            }

            li {
                display: inline-block;
                margin: 2px;
                padding: 0px 2px;
            }
            a {
                color: #fff;
            }
            `}
        </style>
        </>
    )
}