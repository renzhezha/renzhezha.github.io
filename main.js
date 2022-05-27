var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
var imgW = window.innerWidth;
var imgCnt = 5;
var scrollW = imgCnt * imgW;
next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}
function next_pic () {
    index++;
    if (index > imgCnt-1) {
        index = 0;
    }
    showCurrentDot(index);
    var newLeft;
    var scrollToRightW = -imgW * 4 + "px";
    if (wrap.style.left === scrollToRightW) {
        newLeft = 0;
    }else{
        newLeft = parseInt(wrap.style.left) - imgW;
    }
    wrap.style.left = newLeft + "px";
}
function prev_pic () {
    index--;
    if (index < 0) {
        index = imgCnt-1;
    }
    showCurrentDot(index);
    var newLeft;
    if (wrap.style.left === "0px") {
        newLeft = -imgW * 4;
    } else {
        newLeft = parseInt(wrap.style.left) + imgW;
    }
    wrap.style.left = newLeft + "px";
}
var timer = null;
function autoPlay () {
    timer = setInterval(function () {
        next_pic();
    },2000);
}
autoPlay();

var container = document.querySelector(".container");
container.onmouseenter = function () {
    clearInterval(timer);
}
container.onmouseleave = function () {
    autoPlay();    
}

var index = 0;
var dots = document.getElementsByTagName("span");

function showCurrentDot (selectIndex) {
    for(var i = 0, len = dots.length; i < len; i++){
        dots[i].className = "";
    }
    dots[selectIndex].className = "on";
}

for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            wrap.style.left = - i * imgW + "px";
            showCurrentDot(i);
        }
    })(i);            
}