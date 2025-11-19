const searchBox = document.getElementById('searchBox');
const table = document.getElementById('studentTable');
const tbody = table.querySelector('tbody');
const noResults = document.getElementById('noResults');

searchBox.addEventListener('input', () => {
  const q = searchBox.value.trim().toLowerCase();
  let anyVisible = false;
  Array.from(tbody.rows).forEach(row => {
    const cellsText = Array.from(row.cells).map(c => c.textContent.toLowerCase()).join(' ');
    const matches = cellsText.includes(q);
    row.style.display = matches ? '' : 'none';
    if (matches) anyVisible = true;
  });
  noResults.style.display = anyVisible ? 'none' : '';
});
