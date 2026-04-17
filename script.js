let lang = "en";

// تغيير اللغة
function toggleLang(){
if(lang === "en"){
document.getElementById("aboutTitle").innerText = "من أنا";
document.getElementById("aboutText").innerText =
"أنا فريلانسر متخصص في تصميم المواقع، اللوجو، المونتاج، وتصميم QR.";
document.getElementById("servicesTitle").innerText = "الخدمات";
lang = "ar";
}
else{
document.getElementById("aboutTitle").innerText = "About Me";
document.getElementById("aboutText").innerText =
"I am a freelance designer specialized in web design, logo design, video editing, QR design.";
document.getElementById("servicesTitle").innerText = "Services";
lang = "en";
}
}

// إظهار/إخفاء وسيلة التواصل
function toggleContact(){
let method = document.getElementById("contactMethod").value;

if(method === "email"){
document.getElementById("emailField").style.display = "block";
document.getElementById("whatsappField").style.display = "none";
}
else{
document.getElementById("emailField").style.display = "none";
document.getElementById("whatsappField").style.display = "block";
}
}

// إرسال واتساب
document.querySelector("form").addEventListener("submit", function(e){
e.preventDefault();

let name = document.querySelector("input[type='text']").value;
let service = document.getElementById("service").value;
let method = document.getElementById("contactMethod").value;
let email = document.getElementById("emailField").value;
let whatsapp = document.getElementById("whatsappField").value;
let desc = document.querySelector("textarea").value;

let contactInfo = method === "email" ? email : whatsapp;

let message =
`📌 New Order from Website:
👤 Name: ${name}
🛠 Service: ${service}
📞 Contact: ${contactInfo}
💬 Method: ${method}
📝 Description: ${desc}`;

let phone = "201080403165"; // رقمك واتساب

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");
});
