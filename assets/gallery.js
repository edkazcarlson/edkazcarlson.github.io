'use strict';
const dialog = document.querySelector('.lightbox');
if (dialog) {
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', () => {
      image.src = button.dataset.image;
      image.alt = button.querySelector('img').alt;
      caption.textContent = button.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
}
if (location.pathname.includes('/snapshots/2026-10-04/')) {
  const banner = document.querySelector('#snapshot-banner');
  if (banner) banner.innerHTML = '<div class="snapshot-banner">Dated edition · October 4, 2026 development state. <a href="/projects/indexer/">Visit the project overview</a>.</div>';
}
