
document.addEventListener("DOMContentLoaded", function () {

  /* ===== CONTACT FORM ===== */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("clientName")?.value || "";
      const method = document.getElementById("method")?.value || "";
      const service = document.getElementById("service")?.value || "";
      const message = document.getElementById("message")?.value || "";

      const whatsappNumber = "201080403165";
      const email = "ghfjvgh139@gmail.com";

      const text =
`Name: ${name}
Service: ${service}
Message: ${message}`;

      /* WhatsApp */
      if (method === "WhatsApp") {
        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
          "_blank"
        );
      }

      /* Email */
      else if (method === "Email") {
        window.location.href =
          `mailto:${email}?subject=${service}&body=${encodeURIComponent(text)}`;
      }

      form.reset();
    });
  }

});

/* ===== SMOOTH SCROLL ===== */
document.documentElement.style.scrollBehavior = "smooth";

/* ===== SIMPLE HERO BUTTON SCROLL ===== */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
