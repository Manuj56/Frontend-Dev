const steps = ['step1','step2','step3'];
let currentStep = 0;
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const summaryBox = document.getElementById('summary');

function showStep(index) {
  steps.forEach((id,i) => {
    document.getElementById(id).classList.toggle('active', i===index);
  });
  backBtn.style.display = index===0 ? 'none' : 'inline-block';
  nextBtn.textContent = index === steps.length -1 ? 'Finish' : 'Next';
}
function validateStep(index) {
  if (index === 0) {
    const name = document.getElementById('nameInput').value.trim();
    const err = document.getElementById('nameError');
    if (!name) { err.textContent = 'Name required'; return false; } else { err.textContent = ''; return true; }
  }
  if (index === 1) {
    const email = document.getElementById('emailInput').value.trim();
    const err = document.getElementById('emailError');
    if (!email || !email.includes('@')) { err.textContent = 'Valid email required'; return false; } else { err.textContent = ''; return true; }
  }
  if (index === 2) {
    const pw = document.getElementById('passwordInput').value;
    const err = document.getElementById('passwordError');
    if (pw.length < 6) { err.textContent = 'Minimum 6 characters'; return false; } else { err.textContent = ''; return true; }
  }
  return true;
}

nextBtn.addEventListener('click', () => {
  if (!validateStep(currentStep)) return;
  if (currentStep < steps.length -1) {
    currentStep++;
    showStep(currentStep);
  } else {
    showSummary();
  }
});
backBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

function showSummary() {
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  summaryBox.style.display = 'block';
  summaryBox.innerHTML = `<strong>Summary</strong><div>Name: ${name}</div><div>Email: ${email}</div>`;
  nextBtn.style.display = 'none';
  backBtn.style.display = 'none';
}

showStep(currentStep);
