let editButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let popupCloseButton = document.querySelector('.popup__close-button')
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');
let popupInputTitle = document.querySelector('.popup__input_title');
let popupInputSubtitle = document.querySelector('.popup__input_subtitle');
let popupSubmitButton = document.querySelector('.popup__submit-button');

function closePopup(e) {
    e.preventDefault();
    popup.classList.remove('popup_opened');
}

function submitPopup(e) {
    e.preventDefault();
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;
    closePopup(e);
}

// function openPopup(e) {
//     e.preventDefault();
//     popup.classList.toggle('popup_opened')
//     if (!popup.classList.contains('popup_opened')) {
//         profileTitle.textContent = popupInputTitle.value;
//         profileSubtitle.textContent = popupInputSubtitle.value;
//     }
//     else {
//         popupInputTitle.value = profileTitle.textContent;
//         popupInputSubtitle.value = profileSubtitle.textContent;
//     }
// }

function openPopup(e) {
    e.preventDefault();
    popup.classList.toggle('popup_opened')
    if (popup.classList.contains('popup_opened')) {
        popupInputTitle.value = profileTitle.textContent;
        popupInputSubtitle.value = profileSubtitle.textContent;
    }
}

editButton.addEventListener('click', openPopup);
popupSubmitButton.addEventListener('click', submitPopup);
popupCloseButton.addEventListener('click', closePopup);
