const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSettings({ name, email }) {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

export function getSettingsSubmitResult(values) {
  const errors = validateSettings(values);
  return { errors, submitted: Object.keys(errors).length === 0 };
}
