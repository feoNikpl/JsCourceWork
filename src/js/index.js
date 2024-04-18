import {getItems, updateItemDesk, createComplaint} from './mockApi.js';
import {createItem, selectedIdx} from './item.js';
import {itemStorageKey} from './variables.js'
import {setStorageData} from './storageApi.js'

function getData(){
    getItems().then(data=> {
    	if(data !== null){
			setStorageData(itemStorageKey, posts);
			posts.push(...data);
			updatePostListByPredicate(el=>el);
		}});
}

function updatePostListByPredicate(predicate){
    items.innerHTML = '';
    for(let post of posts.filter(predicate)){
        items.append(createItem(post));
    }
}

const posts = [];
const deskIds = [0,1,2,3];
let selectedDeskId = deskIds[0];
getData();



document.addEventListener('DOMContentLoaded', () => {
    // Модальное окно, которое необходимо открыть
    let complainModal = document.getElementById('complainModal');
    // Кнопка "закрыть" внутри модального окна
    let closeButton = complainModal.getElementsByClassName('modal__close-button')[0];
    // Тег body для запрета прокрутки
    let tagBody = document.getElementsByTagName('body')[0];
  
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

	let complainModalSubmit = complainModal.getElementsByClassName('modal__content')[0].getElementsByClassName('modal__confirm-button')[0];
	complainModalSubmit.onclick = (e)=>{
		let complainModalLabels = complainModal.getElementsByClassName('modal__content')[0].getElementsByClassName('modal__description')[0].getElementsByTagName('label');
		let complain = {PostId:selectedIdx, Complain: []};
		for(let el of complainModalLabels)
		{
			if(el.getElementsByTagName('input')[0].checked){
				complain.Complain.push(Number(el.getElementsByTagName('input')[0].id));
				el.getElementsByTagName('input')[0].checked = false;
			}
		}
		createComplaint(complain);
		complainModal.classList.remove('modal_active');
      	tagBody.classList.remove('hidden');
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

	let addToDeskModalContent = addToDeskModal.getElementsByClassName('modal__content')[0].getElementsByClassName('modal__description')[0];
	addToDeskModalContent.childNodes.forEach(el=>{
		el.onclick = (e)=>{
			e.preventDefault();
			posts[selectedIdx-1].desk = Number(el.id);
			setStorageData(itemStorageKey, posts);
			updateItemDesk(posts[selectedIdx-1]);
			addToDeskModal.classList.remove('modal_active');
			tagBody.classList.remove('hidden');
		}
	})

	const searchInput = document.getElementById('searchInput');
		searchInput.addEventListener("input", (event) => {
		if(searchInput.value.length>0) 
			updatePostListByPredicate((el)=> el.description.toLowerCase().includes(searchInput.value.toLowerCase()));
		else
			updatePostListByPredicate((el)=>el);
	});

	const dropdownContent = document.getElementsByClassName('dropdown-content')[0];
	dropdownContent.childNodes.forEach(el=>{
		el.onclick = (e)=>{
			dropDownSelected(el.id, el.innerHTML);
		}
	});
	function dropDownSelected(id, innerHTML){
		selectedDeskId = deskIds[Number(id)];
		const dropDownButton = document.getElementsByClassName("dropbtn")[0];
		dropDownButton.childNodes[0].textContent = innerHTML;
		if(selectedDeskId === 0)
			updatePostListByPredicate(el=>el);
		else
			updatePostListByPredicate(el=>el.desk === selectedDeskId);
	}

});