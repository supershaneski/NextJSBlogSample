const handleScript = () => {
    if(typeof window === "undefined") return;

    window.onload = function() {
        console.log("WINDOW ONLOAD")
    }

    window.onscroll = function() {
        const header = document.getElementById('app-header');
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            header.style.height = (50)+'px';
        } else {
            header.style.height = (100)+'px';
        }
    }
}
const ScrollHandler = (props) => {
    return (
        <script dangerouslySetInnerHTML={{__html: handleScript()}} />
    )
}
export default ScrollHandler;