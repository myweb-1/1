// تغيير اللغة (اختياري تسيبه)
let lang = "en";

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
"I am a freelance designer specialized in web design, logo design, video editing, QR design.";
lang = "en";
}
}

// إرسال واتساب مباشر
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("orderForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let service = document.getElementById("service").value;
let desc = document.getElementById("desc").value;

let message =
`📌 New Order
👤 Name: ${name}
🛠 Service: ${service}
📝 Description: ${desc}`;

let phone = "201080403165";

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");
});

});
