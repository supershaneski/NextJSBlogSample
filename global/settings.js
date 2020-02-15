const AppSettings = function()
{
    var instance= null;

    function Class()
    {
        var obj = {};
        return obj;
    }

    function getInstance()
    {
        if( !instance )
            instance = Class();

        return instance;
    }   

    return { getInstance : getInstance };

}();

export function scrollHandler() {
    if(typeof window === "undefined") return;

    window.onscroll = function() {
        const header = document.getElementById('app-header');
        const bannerName = document.getElementById('banner-name');
        const banner = document.getElementById('banner-right');
        const nav = document.getElementById('header-nav');
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            header.style.height = (50)+'px';
            bannerName.style.display = "none";
            banner.style.display = "block";
            nav.style.left = (60)+'px';
        } else {
            header.style.height = (100)+'px';
            bannerName.style.display = "block";
            banner.style.display = "none";
            nav.style.left = (95)+'px';
        }
    }
}

export default AppSettings;