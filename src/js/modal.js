(() => {
  'use strict';
  console.log("version 1.0.0");
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    modalBtns: document.querySelectorAll('.modal-nav-link'),
    modal: document.querySelector('[data-modal]'),
  };

  const openLogo = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b414b"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';
  const closeLogo = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b414b"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

  refs.openModalBtn.addEventListener('click',handleOpenModal);

  refs.modalBtns.forEach(btn => {
    btn.addEventListener('click', handleOpenModal);
  });

  function handleOpenModal() {
    toggleModal();
    switchModalLogo();
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function switchModalLogo() {
    if (refs.modal.classList.contains('is-open')) {
      refs.openModalBtn.innerHTML = closeLogo;
    } else {
      refs.openModalBtn.innerHTML = openLogo;
    }
  }

})();
