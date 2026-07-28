import { getSettingsSubmitResult } from "./validation.mjs";

const form = document.querySelector("#settings-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const successMessage = document.querySelector("#form-success");

function showError(input, errorElement, message) {
  input.setAttribute("aria-invalid", String(Boolean(message)));
  errorElement.textContent = message || "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = getSettingsSubmitResult({ name: nameInput.value, email: emailInput.value });

  showError(nameInput, nameError, result.errors.name);
  showError(emailInput, emailError, result.errors.email);
  successMessage.textContent = result.submitted ? "Settings saved successfully." : "";

  if (!result.submitted) {
    (result.errors.name ? nameInput : emailInput).focus();
  }
});
