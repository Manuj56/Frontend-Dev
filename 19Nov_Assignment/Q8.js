const dropdown = document.getElementById('customDropdown');
const toggleBtn = document.getElementById('toggleBtn');
const optionsList = document.getElementById('optionsList');

toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  optionsList.classList.toggle('visible');
});

optionsList.addEventListener('click', (e) => {
  const option = e.target.closest('.option');
  if (!option) return;
  toggleBtn.textContent = option.textContent;
  optionsList.classList.remove('visible');
});

document.addEventListener('click', (e) => {
  optionsList.classList.remove('visible');
}, true);
