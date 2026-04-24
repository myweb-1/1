// 1. Animated Text
const texts = [
    "Create Digital Experiences",
    "Build Modern Websites",
    "Design Powerful Brands",
    "A5hraf Studio"
];

let i = 0;
const el = document.getElementById("animatedText");

function changeText() {
    if (el) { // تأكد إن العنصر موجود عشان ميعملش Error
        el.style.opacity = 0;
        setTimeout(() => {
            el.innerText = texts[i];
            el.style.opacity = 1;
            i = (i + 1) % texts.length;
        }, 400);
    }
}
setInterval(changeText, 2500);

// 2. Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// 3. قفل القائمة تلقائياً عند الضغط على أي لينك (هذا الجزء الجديد)
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// 4. WhatsApp Form
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;
    let desc = document.getElementById("desc").value;

    let msg = `New Order:\nName: ${name}\nService: ${service}\nDetails: ${desc}`;
    let phone = "201080403165";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);

    window.open(url, "_blank");
});
