(() => {
  'use strict';
  console.log("version 1.0.0");
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    modalBtns: document.querySelectorAll('.modal-nav-link'),
    modal: document.querySelector('[data-modal]'),
  };
  const openLogo = '<use href=\"/img/icons.svg#menu\"></use>';
  const closeLogo = '<use href="./img/icons.svg#close"></use>';

  console.log(refs.openModalBtn);
  refs.openModalBtn.addEventListener('click',handleOpenModal);
  console.log(refs.openModalBtn);


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
      refs.openModalBtn.children[0].innerHTML = closeLogo;
    } else {
      refs.openModalBtn.children[0].innerHTML = openLogo;
    }
  }

})();
