function scrollToAbout(){
document.getElementById("about").scrollIntoView({
behavior:"smooth"
});
}

// WhatsApp
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("orderForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let service = document.getElementById("service").value;
let desc = document.getElementById("desc").value;

let message =
`New Order:
Name: ${name}
Service: ${service}
Description: ${desc}`;

let phone = "201080403165";

window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank");

});

});
const texts = [
"Create Digital Experiences",
"A5hraf Studio",
"Design. Build. Grow."
];

let index = 0;
const el = document.querySelector(".logo-text");

// أول قيمة
el.innerText = texts[index];

setInterval(() => {
el.classList.add("fade");

setTimeout(() => {
index = (index + 1) % texts.length;
el.innerText = texts[index];
el.classList.remove("fade");
}, 400);

}, 2500);
