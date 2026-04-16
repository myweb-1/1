
/* ===== AOS ANIMATION INIT ===== */
AOS.init({
  duration: 1000,
  once: true
});

/* ===== CONTACT FORM HANDLER ===== */
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const method = document.getElementById("method").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      const email = "ghfjvgh139@gmail.com";
      const whatsappNumber = "201080403165";

      const subject = `New Project Request - ${service}`;

      const body =
`Service: ${service}
Contact Method: ${method}

Message:
${message}`;

      /* ===== EMAIL OPTION ===== */
      if (method === "Email") {
        window.location.href =
          `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }

      /* ===== WHATSAPP OPTION ===== */
      else if (method === "WhatsApp") {
        const waMessage =
`Hello 👋
Service: ${service}
Message: ${message}`;

        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`,
          "_blank"
        );
      }

      /* reset form after sending */
      form.reset();
    });
  }

});

/* ===== BUTTON CLICK EFFECT ===== */
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});
