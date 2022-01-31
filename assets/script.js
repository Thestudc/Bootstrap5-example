let clicks = 0;
 
function make(e) {
    clicks += 1;
   	document.getElementById("clicks").innerHTML = clicks;
    e.preventDefault();
}

function PreventDef(e)
{
    e.preventDefault();
}

let colorOfDiv_Black = document.querySelector('.color-div-text-black').textContent;
let colorOfDiv_Red = document.querySelector('.color-div-text-red').textContent;
let colorOfDiv_Blue = document.querySelector('.color-div-text-blue').textContent;
let colorOfDiv_Green = document.querySelector('.color-div-text-green').textContent;
let colorOfDiv_Yellow = document.querySelector('.color-div-text-yellow').textContent;
let colorOfDiv_Orange = document.querySelector('.color-div-text-orange').textContent;
let colorOfDiv_Gray = document.querySelector('.color-div-text-gray').textContent;
let colorOfDiv_White = document.querySelector('.color-div-text-white').textContent;

function ColorName_Black() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var label = document.createElement("label")
    var input = document.createElement("input");
    label.appendChild(document.createTextNode(colorOfDiv_Black));
    li.classList.add("list-group","pt-1");
    li.setAttribute("onclick","remove(this)");
    input.setAttribute("type","checkbox");
    input.setAttribute("class","form-check-input me-1");
    label.setAttribute("class","list-group");
    input.setAttribute("class","form-check-input-li");
    label.setAttribute("class","list-group-li");
    li.appendChild(input);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
}
function ColorName_Red() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var label = document.createElement("label")
    var input = document.createElement("input");
    label.appendChild(document.createTextNode(colorOfDiv_Red));
    li.classList.add("list-group","pt-1");
    li.setAttribute("onclick","remove(this)");
    input.setAttribute("type","checkbox");
    input.setAttribute("class","form-check-input me-1");
    label.setAttribute("class","list-group");
    input.setAttribute("class","form-check-input-li");
    label.setAttribute("class","list-group-li");
    li.appendChild(input);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
}
function ColorName_Blue() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var label = document.createElement("label")
    var input = document.createElement("input");
    label.appendChild(document.createTextNode(colorOfDiv_Blue));
    li.classList.add("list-group","pt-1");
    li.setAttribute("onclick","remove(this)");
    input.setAttribute("type","checkbox");
    input.setAttribute("class","form-check-input me-1");
    label.setAttribute("class","list-group");
    input.setAttribute("class","form-check-input-li");
    label.setAttribute("class","list-group-li");
    li.appendChild(input);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
}
function ColorName_Green() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var label = document.createElement("label")
    var input = document.createElement("input");
    label.appendChild(document.createTextNode(colorOfDiv_Green));
    li.classList.add("list-group","pt-1");
    li.setAttribute("onclick","remove(this)");
    input.setAttribute("type","checkbox");
    input.setAttribute("class","form-check-input me-1");
    label.setAttribute("class","list-group");
    input.setAttribute("class","form-check-input-li");
    label.setAttribute("class","list-group-li");
    li.appendChild(input);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
}
function ColorName_Yellow() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var label = document.createElement("label")
    var input = document.createElement("input");
    label.appendChild(document.createTextNode(colorOfDiv_Yellow));
    li.classList.add("list-group","pt-1");
    li.setAttribute("onclick","remove(this)");
    input.setAttribute("type","checkbox");
    input.setAttribute("class","form-check-input me-1");
    label.setAttribute("class","list-group");
    input.setAttribute("class","form-check-input-li");
    label.setAttribute("class","list-group-li");
    li.appendChild(input);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
}
function ColorName_Orange() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var label = document.createElement("label")
    var input = document.createElement("input");
    label.appendChild(document.createTextNode(colorOfDiv_Orange));
    li.classList.add("list-group","pt-1");
    li.setAttribute("onclick","remove(this)");
    input.setAttribute("type","checkbox");
    input.setAttribute("class","form-check-input me-1");
    label.setAttribute("class","list-group");
    input.setAttribute("class","form-check-input-li");
    label.setAttribute("class","list-group-li");
    li.appendChild(input);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
}
function ColorName_Gray() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var label = document.createElement("label")
    var input = document.createElement("input");
    label.appendChild(document.createTextNode(colorOfDiv_Gray));
    li.classList.add("list-group","pt-1");
    li.setAttribute("onclick","remove(this)");
    input.setAttribute("type","checkbox");
    input.setAttribute("class","form-check-input me-1");
    label.setAttribute("class","list-group");
    input.setAttribute("class","form-check-input-li");
    label.setAttribute("class","list-group-li");
    li.appendChild(input);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
}
function ColorName_White() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var label = document.createElement("label")
    var input = document.createElement("input");
    label.appendChild(document.createTextNode(colorOfDiv_White));
    li.classList.add("list-group","pt-1");
    li.setAttribute("onclick","remove(this)");
    input.setAttribute("type","checkbox");
    input.setAttribute("class","form-check-input me-1");
    label.setAttribute("class","list-group");
    input.setAttribute("class","form-check-input-li");
    label.setAttribute("class","list-group-li");
    li.appendChild(input);
    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
}

function remove(el){
    var element = el;
    element.remove();
}

window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 40;
    percent2 = (sliderTwo.value / sliderMaxValue) * 90;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

function toggleClass(element) {
    var classe = 'lar la-heart pt-3 pb-4';
    
    if ( element.className == classe ){
        element.className = classe.replace('lar', 'liked las');
    } else {
        element.className = classe;
    }
    element.preventDefault();
}