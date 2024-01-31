var navbar = document.querySelector(".navbar");
var navbtn = document.querySelector(".menu");
var flag = 0;

navbtn.addEventListener("click", () => {

    if (flag == 0) {
        flag += 1;
        navbar.style.transform = "translateY(0%)";
        document.querySelector(".logo").style.zIndex = "-1";
        document.querySelector(".bar-one").style.transform = "rotate(45deg)";
        document.querySelector(".bar-two").style.transform = "rotate(-45deg)";
        document.querySelector(".bar-one").style.margin = "0px";
        document.querySelector(".bar-two").style.margin = "0px";
    }
    else {
        flag -= 1;
        navbar.style.transform = "translateY(-130%)";
        document.querySelector(".logo").style.zIndex = "1";
        document.querySelector(".bar-one").style.transform = "rotate(0deg)";
        document.querySelector(".bar-two").style.transform = "rotate(0deg)";
        document.querySelector(".bar-one").style.margin = "2px 0px";
        document.querySelector(".bar-two").style.margin = "-2px 0px";
    }

});

const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true
});

var loader = document.querySelector(".loader");
var one = document.querySelector(".first-heading");
var two = document.querySelector(".second-heading");
var three = document.querySelector(".third-heading");

setTimeout(() => {
    loader.style.transform = "translateY(-100%)";
}, 3000);

setTimeout(() => {
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
}, 700);

setTimeout(() => {
    one.style.display = "none";
    two.style.display = "block";
    three.style.display = "none";
}, 1400);

setTimeout(() => {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "block";
}, 2100);
