let editButton = document.querySelector('.profile__edit-button') /*Кнопка реактирования профиля*/
let popup = document.querySelector('.popup')
let close = document.querySelector('.popup__close-button')
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');
let popupInputTitle = document.querySelector('.popup__input-title');
let popupInputSubtitle = document.querySelector('.popup__input-subtitle');
let editSubmit = document.querySelector('.popup__submit-button');


function openModal() {
    popup.style.display = 'flex';
    popupInputTitle.value = profileTitle.textContent;
    popupInputSubtitle.value = profileSubtitle.textContent;
}

function closeModal() {
    popup.style.display = 'none';
}

function closePopupSubmit() {
    popup.style.display = 'none';
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;
}

editButton.addEventListener('click', function () {
    openModal();
});


close.addEventListener('click', function () {
    closeModal();
});


editSubmit.addEventListener('click', function () {
    closePopupSubmit()
});

document.addEventListener('keypress', function (e) {
    if (e.key === "Enter" || popup.style.display === 'none') {
        e.preventDefault();
        closePopupSubmit();
    }
});


