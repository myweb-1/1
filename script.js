document.getElementById("contactForm").addEventListener("submit", function(e) {
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

  this.reset();
});

/* LANGUAGE SWITCH */
function setLang(lang) {

  const title = document.querySelector("h1");
  const subtitle = document.querySelector("p");

  if (lang === "ar") {
    document.body.dir = "rtl";
    title.innerText = "ستوديو الإبداع";
    subtitle.innerText = "تصميم مواقع • لوجو • مونتاج • QR";
  }

  if (lang === "en") {
    document.body.dir = "ltr";
    title.innerText = "Creative Studio";
    subtitle.innerText = "Web Design • Logo • Video Editing • QR Design";
  }
}
