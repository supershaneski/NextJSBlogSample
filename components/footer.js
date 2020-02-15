
const Footer = () => {
    return (
        <>
            <footer>
            <p>Copyright &copy; 2020 All Rights Reserved</p>
            </footer>
            <style jsx>
                {`
                footer {
                    background: #282c34;
                    position: relative;
                    width: 100%;
                    /*height: 50px;*/
                    padding:15px 0px;
                    display: inline-block;
                }
                p {
                    margin-left: 20px;
                    font-family: 'Arial';
                    font-size: 0.7em;
                    color: #fff;
                }
                `}
            </style>
        </>
    )
}

export default Footer;