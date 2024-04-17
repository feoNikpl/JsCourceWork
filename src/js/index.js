document.addEventListener('DOMContentLoaded', () => {

    // Кнопка по которой происходит клик
    let callBackButton = document.getElementById('callback-button');
    // Модальное окно, которое необходимо открыть
    let complainModal = document.getElementById('complainModal');
    // Кнопка "закрыть" внутри модального окна
    let closeButton = complainModal.getElementsByClassName('modal__close-button')[0];
    // Тег body для запрета прокрутки
    let tagBody = document.getElementsByTagName('body');
    console.log(true);
    callBackButton.onclick = function (e) {
      e.preventDefault();
      complainModal.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }
  
    closeButton.onclick = function (e) {
      e.preventDefault();
      complainModal.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
  
    complainModal.onmousedown = function (e) {
      let target = e.target;
      let modalContent = complainModal.getElementsByClassName('modal__content')[0];
      if (e.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
      }
    };
  
    // Вызов модального окна несколькими кнопками на странице
    let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');
  
    for (let button of buttonOpenModal1) {
      button.onclick = function (e) {
        e.preventDefault();
        complainModal.classList.add('modal_active');
        tagBody.classList.add('hidden');
      }
    }
  
  });