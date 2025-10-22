
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };


  

  Object.values(errors).forEach((err) => (err.textContent = ""));
  successMsg.textContent = "";

  let isValid = true;

  if (!name.value.trim()) {
    errors.name.textContent = "Full name is required.";
    isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!email.value.trim()) {
    errors.email.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    errors.email.textContent = "Please enter a valid email (name@example.com).";
    isValid = false;
  }

  if (!subject.value.trim()) {
    errors.subject.textContent = "Subject is required.";
    isValid = false;
  }

  if (!message.value.trim()) {
    errors.message.textContent = "Message is required.";
    isValid = false;
  } else if (message.value.trim().length < 10) {
    errors.message.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "✅ Your message has been sent successfully!";
    form.reset();
  }
});

// ===== MENU TOGGLE =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  const isOpen = navLinks.classList.contains("show");
  icon.classList = isOpen ? "fas fa-times" : "fas fa-bars";
});
