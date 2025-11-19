const textArea = document.getElementById('textArea');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;

function updateCounter() {
  const remaining = MAX - textArea.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.remove('yellow','red');
  if (remaining <= 20 && remaining > 0) counter.classList.add('yellow');
  if (remaining <= 0) counter.classList.add('red');
}

textArea.addEventListener('keydown', (e) => {
  const remaining = MAX - textArea.value.length;
  const selectionLength = (textArea.selectionEnd - textArea.selectionStart);
  if (remaining <= 0 && !['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
    e.preventDefault();
  }
});

textArea.addEventListener('input', updateCounter);

resetBtn.addEventListener('click', () => {
  textArea.value = '';
  updateCounter();
});

updateCounter();
