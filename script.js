
document.addEventListener("DOMContentLoaded", function () {

  /* CONTACT FORM */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("clientName").value;
      const method = document.getElementById("method").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

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

/* LANGUAGE SWITCH (EN ONLY - NO ARABIC) */
function setLang(lang) {

  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const aboutTitle = document.getElementById("aboutTitle");
  const servicesTitle = document.getElementById("servicesTitle");
  const contactTitle = document.getElementById("contactTitle");

  if (lang === "en") {
    document.body.dir = "ltr";

    title.innerText = "Creative Studio";
    subtitle.innerText = "Web Design • Logo Design • Video Editing • QR Design";

    aboutTitle.innerText = "About";
    servicesTitle.innerText = "Services";
    contactTitle.innerText = "Contact";
  }
}
