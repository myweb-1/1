
/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* BODY */
body {
  font-family: 'Poppins', sans-serif;
  background: #0b1220;
  color: #ffffff;
  line-height: 1.6;
}

/* HERO */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: radial-gradient(circle at top, #1e293b, #0b1220 70%);
  padding: 20px;
}

.hero-content h1 {
  font-size: 50px;
  font-weight: 700;
}

.hero-content p {
  margin-top: 15px;
  font-size: 18px;
  opacity: 0.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* BUTTON */
button {
  margin-top: 25px;
  padding: 14px 30px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

/* SECTIONS */
.section {
  padding: 90px 20px;
  text-align: center;
}

.section h2 {
  font-size: 36px;
  margin-bottom: 15px;
}

.section p {
  opacity: 0.8;
  max-width: 700px;
  margin: auto;
}

/* SERVICES GRID */
.grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
}

/* CARDS */
.card {
  background: rgba(255,255,255,0.06);
  padding: 25px;
  width: 280px;
  border-radius: 15px;

  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);

  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  background: rgba(255,255,255,0.12);
}

/* CONTACT SECTION */
.contact {
  background: rgba(255,255,255,0.03);
  border-radius: 20px;
  margin: 20px;
}

/* FORM */
form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

select, textarea {
  padding: 14px;
  border-radius: 10px;
  border: none;
  outline: none;

  background: rgba(255,255,255,0.08);
  color: white;
}

textarea {
  min-height: 130px;
  resize: none;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 30px;
  background: #050a14;
  font-size: 14px;
  opacity: 0.7;
  margin-top: 40px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 32px;
  }

  .card {
    width: 100%;
  }
}
