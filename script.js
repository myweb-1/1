
document.addEventListener("DOMContentLoaded", function () {

  /* ===== CONTACT FORM ===== */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("clientName").value;
      const method = document.getElementById("method").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

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
      if (method === "Email") {
        window.location.href =
          `mailto:${email}?subject=${service}&body=${encodeURIComponent(text)}`;
      }

      form.reset();
    });
  }

});

/* ===== LANGUAGE (ENGLISH ONLY) ===== */
function setLang(lang) {

  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const aboutTitle = document.getElementById("aboutTitle");
  const servicesTitle = document.getElementById("servicesTitle");
  const contactTitle = document.getElementById("contactTitle");

  if (lang === "en") {
    document.body.dir = "ltr";

    if (title) title.innerText = "Creative Studio";
    if (subtitle) subtitle.innerText = "Web Design • Logo Design • Video Editing • QR Design";
    if (aboutTitle) aboutTitle.innerText = "About";
    if (servicesTitle) servicesTitle.innerText = "Services";
    if (contactTitle) contactTitle.innerText = "Contact";
  }
}

/* ===== SMOOTH SCROLL ===== */
document.documentElement.style.scrollBehavior = "smooth";
