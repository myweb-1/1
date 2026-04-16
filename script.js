AOS.init({
  duration: 1000,
  once: true
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const method = document.getElementById("method").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const email = "ghfjvgh139@gmail.com";
  const whatsapp = "201080403165";

  const text =
`Service: ${service}
Message: ${message}`;

  if (method === "WhatsApp") {
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`);
  }

  if (method === "Email") {
    window.location.href =
    `mailto:${email}?subject=${service}&body=${encodeURIComponent(text)}`;
  }
});
