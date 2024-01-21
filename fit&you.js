var center1 = document.querySelector("#page6 #center1");
var center2 = document.querySelector("#page6 #center2");
var center3 = document.querySelector("#page6 #center3");
var center4 = document.querySelector("#page6 #center4");

var add1 = document.querySelector("#page6 #add1");
var add2 = document.querySelector("#page6 #add2");
var add3 = document.querySelector("#page6 #add3");
var add4 = document.querySelector("#page6 #add4");

var add1Num = document.querySelector("#page6 #footer #add1num");
var add2Num = document.querySelector("#page6 #footer #add2num");
var add3Num = document.querySelector("#page6 #footer #add3num");
var add4Num = document.querySelector("#page6 #footer #add4num");

var center1Icon = document.querySelector("#page6 #center1 i");
var center2Icon = document.querySelector("#page6 #center2 i");
var center3Icon = document.querySelector("#page6 #center3 i");
var center4Icon = document.querySelector("#page6 #center4 i");

center1.addEventListener("click",function(){
    add1.style.opacity = 1;
    center1Icon.style.color = "#fb5607"
    center2Icon.style.color = "gray"
    center3Icon.style.color = "gray"
    center4Icon.style.color = "gray"
    add1Num.style.opacity = 1;
    add2.style.opacity = 0;
    add3.style.opacity = 0;
    add4.style.opacity = 0;
})

center2.addEventListener("click",function(){
    add1.style.opacity = 0;
    add2.style.opacity = 1;
    center2Icon.style.color = "#fb5607"
    center1Icon.style.color = "gray"
    center3Icon.style.color = "gray"
    center4Icon.style.color = "gray"
    add2Num.style.opacity = 1;
    add3.style.opacity = 0;
    add4.style.opacity = 0;
})

center3.addEventListener("click",function(){
    add1.style.opacity = 0;
    add2.style.opacity = 0;
    add3.style.opacity = 1;
    center3Icon.style.color = "#fb5607"
    center1Icon.style.color = "gray"
    center2Icon.style.color = "gray"
    center4Icon.style.color = "gray"
    add4.style.opacity = 0;
})

center4.addEventListener("click",function(){
    add1.style.opacity = 0;
    add2.style.opacity = 0;
    add3.style.opacity = 0;
    add4.style.opacity = 1;
    center4Icon.style.color = "#fb5607"
    center1Icon.style.color = "gray"
    center2Icon.style.color = "gray"
    center3Icon.style.color = "gray"
})