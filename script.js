const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const message = document.getElementById("message");

const togglePassword = document.getElementById("togglePassword");

// Show / hide password
togglePassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    password.type = "password";
    togglePassword.textContent = "Show";
  }
});

// Login form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";
  message.textContent = "";

  let valid = true;

  // Validate email
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!email.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // Validate password
  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    valid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent =
      "Password must be at least 6 characters";
    valid = false;
  }

  if (!valid) {
    return;
  }

  // Demo login only — no real authentication
  message.style.color = "#27ae60";
  message.textContent = "Login successful!";

  console.log("Email:", email.value);
});
