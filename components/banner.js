const Banner = (props) => {
    const bgImage = props.src || '/images/404.jpg';
    const bgTop = props.top || 10;
    const bgHeight = props.height || 200;
    return (
        <>
        <article className="banner">&nbsp;</article>
        <style jsx>
            {`
            .banner {
                background: #fff url(${bgImage}) no-repeat;
                background-position: center center;
                background-size: 100%;
                position: fixed;
                left: 0px;
                top: ${bgTop}px;
                width: 100%;
                height: ${bgHeight}px;
                z-index: 1;
                color: #fff;
                overflow: hidden;
            }
            `}
        </style>
        </>    
    )
}
export default Banner;