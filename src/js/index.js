import {getItems} from './mockApi.js';
import {createItem} from './item.js';

function getData(){
    getItems().then(data=> {
		let items = document.getElementById('items');
		console.log(items);
		items.innerHTML = '';
        if(data !== null){
			data.forEach(element => {
				items.append(createItem(element));
			});
			posts.push(...data);
		}
          
    });
}

const posts = [];
getData();



document.addEventListener('DOMContentLoaded', () => {
    // Модальное окно, которое необходимо открыть
    let complainModal = document.getElementById('complainModal');
    // Кнопка "закрыть" внутри модального окна
    let closeButton = complainModal.getElementsByClassName('modal__close-button')[0];
    // Тег body для запрета прокрутки
    let tagBody = document.getElementsByTagName('body');
  
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

	// Модальное окно, которое необходимо открыть
    let addToDeskModal = document.getElementById('addToDeskModal');
    // Кнопка "закрыть" внутри модального окна
    closeButton = addToDeskModal.getElementsByClassName('modal__close-button')[0];
  
    closeButton.onclick = function (e) {
      e.preventDefault();
      addToDeskModal.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
  
    addToDeskModal.onmousedown = function (e) {
      let target = e.target;
      let modalContent = addToDeskModal.getElementsByClassName('modal__content')[0];
      if (e.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
      }
    };
});