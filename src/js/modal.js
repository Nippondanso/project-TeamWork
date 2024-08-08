document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.querySelector('.backdrop');
    const closeModalBtn = document.querySelector('.modal-close-bth');

    // Функція для закриття модального вікна
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Додаємо обробник події для кнопки закриття
    closeModalBtn.addEventListener('click', closeModal);

    // Відкриття модального вікна для демонстрації 
    modal.style.display = 'flex';

    function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
});
