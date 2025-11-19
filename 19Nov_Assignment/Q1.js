const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

addBtn.addEventListener('click', () => {
  const name = productInput.value.trim();
  if (!name) return;
  const li = createProductItem(name);
  productList.appendChild(li);
  productInput.value = '';
});

function createProductItem(name) {
  const li = document.createElement('li');
  const nameSpan = document.createElement('span');
  nameSpan.className = 'editable';
  nameSpan.textContent = name;
  nameSpan.setAttribute('data-editing', 'false');

  const actions = document.createElement('div');
  actions.className = 'actions';
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.setAttribute('data-action', 'edit');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.setAttribute('data-action', 'delete');

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(nameSpan);
  li.appendChild(actions);
  return li;
}

productList.addEventListener('click', (e) => {
  const actionBtn = e.target.closest('button');
  if (!actionBtn) return;
  const action = actionBtn.getAttribute('data-action');
  const li = actionBtn.closest('li');
  const nameSpan = li.querySelector('.editable');

  if (action === 'delete') {
    li.remove();
  } else if (action === 'edit') {
    enterEditMode(nameSpan);
  }
});

function enterEditMode(nameSpan) {
  if (nameSpan.getAttribute('data-editing') === 'true') return;
  const currentText = nameSpan.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentText;
  input.style.width = '100%';
  nameSpan.replaceWith(input);
  input.focus();
  input.select();
  input.dataset.original = currentText;
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      saveEdit(input);
    } else if (ev.key === 'Escape') {
      cancelEdit(input);
    }
  });
  setTimeout(() => {
    document.addEventListener('click', outsideClickHandler);
  }, 0);

  function outsideClickHandler(evt) {
    if (evt.target !== input) {
      saveEdit(input);
      document.removeEventListener('click', outsideClickHandler);
    }
  }
}

function saveEdit(input) {
  const newText = input.value.trim() || input.dataset.original;
  const span = document.createElement('span');
  span.className = 'editable';
  span.textContent = newText;
  input.replaceWith(span);
}

function cancelEdit(input) {
  const span = document.createElement('span');
  span.className = 'editable';
  span.textContent = input.dataset.original;
  input.replaceWith(span);
}
