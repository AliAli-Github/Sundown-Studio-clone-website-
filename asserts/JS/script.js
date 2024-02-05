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

var wrapper_container = document.querySelector(".cards-parent-one");
var box = document.querySelector(".box");

wrapper_container.addEventListener("mouseenter", () => {
    box.style.display = "block";
});

wrapper_container.addEventListener("mouseleave", () => {
    box.style.display = "none";
});


var wrapper = document.querySelectorAll(".wrapper");

wrapper.forEach((details) => {
    details.addEventListener("mouseenter", () => {
        var img = details.getAttribute("data-image");
        box.style.backgroundImage = `url(${img})`;
    });
});


var display_one = document.querySelector(".display-one");
var display_two = document.querySelector(".display-two");
var display_three = document.querySelector(".display-three");
var img = document.querySelector(".big-inner-image");
var lead = document.querySelector(".paragraph");

console.log(display_one, display_two, display_three, lead,img);