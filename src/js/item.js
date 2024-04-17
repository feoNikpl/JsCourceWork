import descButtomIcon from '../img/pencil-solid.svg'
import complainButtonIcon from '../img/complainIcon.png'

function createItem(item){
    let itemMain = createDiv("items-list__item");
    let itemContent = createDiv("items-list__item-content");
    let contentImg = createImg(item.picture);
    let contentMenu = createDiv("items-list__item-content-menu");

    let complainButton = createButton(complainButtonIcon, "items-list__item-content-complain");
    let complainModal = document.getElementById('complainModal');
    let tagBody = document.getElementsByTagName('body');
    complainButton.onclick = function (e) {
      e.preventDefault();
      complainModal.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }

    let deskButton = createButton(descButtomIcon, "items-list__item-content-complain");
    let addToDeskModal = document.getElementById('addToDeskModal');
    deskButton.onclick = function (e) {
      e.preventDefault();
      addToDeskModal.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }

    contentMenu.append(complainButton, deskButton);
    itemContent.append(contentImg, contentMenu);

    let itemInfo = createDiv('items-list__item-info');
    let itemAvatar = createDiv('item-info__photo');
    itemAvatar.append(createImg(item.avatar));
    let itemInfoDescr = createDiv('item-info__descr');
    itemInfoDescr.innerHTML = item.description;
    itemInfo.append(itemAvatar, itemInfoDescr);
    

    itemMain.append(itemContent, itemInfo);
    return itemMain;

}

function createDiv(style){
    let retVal = document.createElement('div');
    retVal.classList.add(style);
    return retVal;
}

function createButton(image, style){
    let retVal = document.createElement('button');
    retVal.classList.add(style);
    let img = createImg(image)
    retVal.append(img);
    return retVal;
}

function createImg(src){
    let retImg = document.createElement('img'); 
    retImg.src = src;
    return retImg;
}

export {createItem};

