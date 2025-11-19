const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalContent = document.getElementById('modalContent');

gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  modalImage.src = img.src.replace('/300/200','/800/600'); 
  modal.classList.remove('hidden');
});

modal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalImage.src = '';
});

modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});
