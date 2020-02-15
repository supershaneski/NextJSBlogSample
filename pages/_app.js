import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/base.css';

function MyApp({ Component, pageProps }) {
    
    const siteTitle = process.env.SiteTitle || 'NextJS';
    
    return (
        <>
            <Head>
                <title>{ siteTitle }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <Header />
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
            
            <style jsx>
                {`
                .container {
                    background-color: gold;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 100%;
                }
                main {
                    background-color: magenta;
                    position: relative;
                    z-index: 1;
                }
                `}
            </style>
        </>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
}

/*
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const siteTitle = process.env.SiteTitle || 'NextJS';
        return (
            <>
            <Head>
                <title>{ siteTitle }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <Component {...pageProps} />
            </div>
            <Clock />
            </>
        )
    }
}
*/

export default MyApp;