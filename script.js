
/* SAFE VERSION - NO CRASH */

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("clientName")?.value || "";
      const method = document.getElementById("method")?.value || "";
      const service = document.getElementById("service")?.value || "";
      const message = document.getElementById("message")?.value || "";

      const whatsapp = "201080403165";
      const email = "ghfjvgh139@gmail.com";

      const text =
`Name: ${name}
Service: ${service}
Message: ${message}`;

      if (method === "WhatsApp") {
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`);
      }

      if (method === "Email") {
        window.location.href =
          `mailto:${email}?subject=${service}&body=${encodeURIComponent(text)}`;
      }

      form.reset();
    });
  }

});

/* SIMPLE LANGUAGE (SAFE) */
function setLang(lang) {
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");

  if (lang === "en") {
    document.body.dir = "ltr";

    if (title) title.innerText = "Creative Studio";
    if (subtitle) subtitle.innerText = "Web Design • Logo • Video Editing • QR Design";
  }
}

/* SCROLL */
document.documentElement.style.scrollBehavior = "smooth";
