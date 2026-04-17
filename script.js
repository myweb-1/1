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

// إظهار / إخفاء وسيلة التواصل
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
