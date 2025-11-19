const form = document.getElementById('regForm');
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');
const nameErr = document.getElementById('nameErr');
const emailErr = document.getElementById('emailErr');
const passwordErr = document.getElementById('passwordErr');
const formMsg = document.getElementById('formMsg');

function validateAll() {
  let valid = true;
  if (!nameField.value.trim()) { nameErr.textContent = 'Name is required'; valid = false; } else nameErr.textContent = '';
  if (!emailField.value.trim() || !emailField.value.includes('@')) { emailErr.textContent = 'Valid email required'; valid = false; } else emailErr.textContent = '';
  if (passwordField.value.length < 6) { passwordErr.textContent = 'Password must be at least 6 chars'; valid = false; } else passwordErr.textContent = '';
  return valid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  formMsg.textContent = '';
  if (validateAll()) {
    formMsg.textContent = 'Form Submitted Successfully';
    form.reset();
  }
});

[nameField, emailField, passwordField].forEach(el => {
  el.addEventListener('input', () => {
    validateAll();
    formMsg.textContent = '';
  });
});
