let lang = "en";

// translate
function toggleLang(){
if(lang === "en"){
document.getElementById("aboutTitle").innerText = "من أنا";
document.getElementById("aboutText").innerText =
"أنا فريلانسر متخصص في تصميم المواقع، اللوجو، المونتاج، وتصميم QR.";
lang = "ar";
}
else{
document.getElementById("aboutTitle").innerText = "About Me";
document.getElementById("aboutText").innerText =
"I am a freelance designer specialized in modern web design, logo creation, video editing, and QR design.";
lang = "en";
}
}

// whatsapp order
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("orderForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let service = document.getElementById("service").value;
let desc = document.getElementById("desc").value;

let message =
`🔥 New Project Request
👤 Name: ${name}
🛠 Service: ${service}
📝 Description: ${desc}`;

let phone = "201080403165";

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");
});

});
