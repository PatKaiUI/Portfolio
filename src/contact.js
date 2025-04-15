document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Form validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset previous error states
    resetErrors();

    // Validate name
    if (!nameInput.value.trim()) {
      showError(nameInput, "Bitte geben Sie Ihren Namen ein");
      return;
    }

    // Validate email
    if (!emailInput.value.trim()) {
      showError(emailInput, "Bitte geben Sie Ihre E-Mail-Adresse ein");
      return;
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailInput, "Bitte geben Sie eine gültige E-Mail-Adresse ein");
      return;
    }

    // Validate message
    if (!messageInput.value.trim()) {
      showError(messageInput, "Bitte geben Sie eine Nachricht ein");
      return;
    }

    // If all validations pass, show success message
    showSuccess();
  });

  // Helper functions
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement =
      formGroup.querySelector(".error-message") ||
      document.createElement("div");
    errorElement.className = "error-message text-red-500 text-sm mt-1";
    errorElement.textContent = message;

    if (!formGroup.querySelector(".error-message")) {
      formGroup.appendChild(errorElement);
    }

    input.classList.add("border-red-500");
  }

  function resetErrors() {
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.classList.remove("border-red-500");
    });
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showSuccess() {
    const successMessage = document.createElement("div");
    successMessage.className =
      "success-message bg-green-500 text-white p-4 rounded-lg mb-4";
    successMessage.textContent =
      "Vielen Dank für Ihre Nachricht! Ich werde mich in Kürze bei Ihnen melden.";

    form.insertBefore(successMessage, form.firstChild);

    // Reset form
    form.reset();

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }
});
