// LOGO ANIMATION
const texts = [
"Create Digital Experiences",
"A5hraf Studio",
"Design. Build. Grow."
];

let i = 0;
const el = document.querySelector(".logo-text");

function animate(){
el.style.opacity = 0;

setTimeout(() => {
el.innerText = texts[i];
el.style.opacity = 1;

i = (i + 1) % texts.length;
}, 400);
}

animate();
setInterval(animate, 2500);

// WHATSAPP ORDER
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("orderForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let service = document.getElementById("service").value;
let desc = document.getElementById("desc").value;

let msg =
`New Order:
Name: ${name}
Service: ${service}
Details: ${desc}`;

let phone = "201080403165";

window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(msg), "_blank");

});

});
