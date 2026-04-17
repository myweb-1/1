const texts = [
"Create Digital Experiences",
"Build Modern Websites",
"Design Powerful Brands",
"A5hraf Studio"
];

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
const counters = document.querySelectorAll(".counter");

const speed = 80;

const startCounting = () => {
counters.forEach(counter => {

const updateCount = () => {
const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = Math.ceil(target / speed);

if(count < target){
counter.innerText = count + increment;
setTimeout(updateCount, 30);
} else {
counter.innerText = target + "+";
}
};

updateCount();

});
};

// تشغيل عند ظهور الصفحة
window.addEventListener("load", startCounting);
// WhatsApp
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
function toggleDark(){
document.body.classList.toggle("dark");
}
