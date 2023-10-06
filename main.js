var scrolled = false;

window.onscroll = () => {
    const scrollPositionY = window.scrollY;
    var hw = 0.1;
    if (scrollPositionY >= window.innerHeight*hw && scrolled == false){
        var introbox = document.querySelector(".introbox");
        introbox.style.animationFillMode = "forwards";
        introbox.style.animation = "boxinto 1s forwards";
        scrolled = true;
    }else if (scrollPositionY < window.innerHeight*hw && scrolled == true){
        var introbox = document.querySelector(".introbox");
        introbox.style.animationFillMode = "forwards";
        introbox.style.animation = "boxout 1s forwards";
        scrolled = false;
    }
}