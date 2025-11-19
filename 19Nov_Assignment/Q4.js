const themeButtons = document.querySelectorAll('[data-theme-choice]');
const bodyEl = document.body;
const currentThemeSpan = document.getElementById('currentTheme');

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const chosen = btn.getAttribute('data-theme-choice');
    bodyEl.setAttribute('data-theme', chosen); 
    bodyEl.dataset.theme = chosen; 
    currentThemeSpan.textContent = chosen;
  });
});

currentThemeSpan.textContent = bodyEl.getAttribute('data-theme') || 'light';
