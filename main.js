var scrolled = false;

window.onscroll = () => {
    const scrollPositionY = window.scrollY;
    if (scrollPositionY >= window.innerHeight*0.15 && scrolled == false){
        var introbox = document.querySelector(".introbox");
        introbox.style.animationFillMode = "forwards";
        introbox.style.animation = "boxinto 1s forwards";
        scrolled = true;
    }else if (scrollPositionY < window.innerHeight*0.05 && scrolled == true){
        var introbox = document.querySelector(".introbox");
        introbox.style.animationFillMode = "forwards";
        introbox.style.animation = "boxout 1s forwards";
        scrolled = false;
    }
}