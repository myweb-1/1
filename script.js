let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// NEXT SECTION
function nextSlide(){
currentSlide++;
if(currentSlide >= slides.length) currentSlide = 0;

slides[currentSlide].scrollIntoView({behavior:"smooth"});
}

// WHATSAPP
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("orderForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let service = document.getElementById("service").value;
let desc = document.getElementById("desc").value;

let message =
`🔥 New Order
👤 Name: ${name}
🛠 Service: ${service}
📝 Description: ${desc}`;

let phone = "201080403165";

window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank");

});

// TYPING EFFECT
let text = "Create Digital Experiences";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing, 80);
}
}

typing();

});

// SIMPLE LANGUAGE TOGGLE
function toggleLang(){
let el = document.getElementById("typing");

if(el.innerText.includes("Create")){
el.innerText = "اصنع تجارب رقمية احترافية";
}
else{
el.innerText = "Create Digital Experiences";
}
}
