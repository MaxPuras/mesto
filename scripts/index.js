let editButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let close = document.querySelector('.popup__close-button')
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');
let popupInputTitle = document.querySelector('.popup__input-title');
let popupInputSubtitle = document.querySelector('.popup__input-subtitle');
let editSubmit = document.querySelector('.popup__submit-button');

editButton.addEventListener('click', modal);
close.addEventListener('click', modal);

editSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    closePopupSubmit()
});

function closePopupSubmit() {
    popup.classList.remove('popup_opened');
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;
}

/*Проверяем наличие модификатора _opened в блоке .popup
  Если модификатор есть - удаляем по клику
  Если модификатора нет - добавляем по клику
*/
function modal() {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');
        profileTitle.textContent = popupInputTitle.value;
        profileSubtitle.textContent = popupInputSubtitle.value;
    } else {
        popup.classList.add('popup_opened');
        popupInputTitle.value = profileTitle.textContent;
        popupInputSubtitle.value = profileSubtitle.textContent;
    }
}
