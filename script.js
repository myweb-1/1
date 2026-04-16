// Initialize AOS animation library
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scroll effect for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const method = document.getElementById("method").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const email = "ghfjvgh139@gmail.com";

  const subject = "New Client Request - " + service;

  const body =
`Contact Method: ${method}
Service: ${service}

Message:
${message}`;

  if (method === "Email") {
    // فتح الإيميل مباشرة
    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  else if (method === "WhatsApp") {
    const whatsappNumber = "201080403165";

    const waMessage =
`Service: ${service}
Message: ${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`,
      "_blank"
    );
  }
});
// Simple button click effect (optional animation)
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});
