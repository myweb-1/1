// Animated Text
const texts = [
"Create Digital Experiences",
"Build Modern Websites",
"Design Powerful Brands",
"A5hraf Studio"
];
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
menu.classList.toggle("active");
});
let i = 0;
const el = document.getElementById("animatedText");

function changeText(){
el.style.opacity = 0;

setTimeout(() => {
el.innerText = texts[i];
el.style.opacity = 1;
i = (i + 1) % texts.length;
}, 400);
}

setInterval(changeText, 2500);

// WhatsApp Form
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

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);

window.open(url, "_blank");
});
