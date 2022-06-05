let editButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let popupCloseButton = document.querySelector('.popup__close-button')
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');
let popupInputTitle = document.querySelector('.popup__input_title');
let popupInputSubtitle = document.querySelector('.popup__input_subtitle');
let popupSubmitButton = document.querySelector('.popup__submit-button');

function submitPopup(e) {
    e.preventDefault();
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;
    togglePopup();
}

function togglePopup() {
    popup.classList.toggle('popup_opened')
    if (popup.classList.contains('popup_opened')) {
        popupInputTitle.value = profileTitle.textContent;
        popupInputSubtitle.value = profileSubtitle.textContent;
    }
}

editButton.addEventListener('click', togglePopup);
popupSubmitButton.addEventListener('click', submitPopup);
popupCloseButton.addEventListener('click', togglePopup);
