const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const popupImage = document.querySelector('.popup_image');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const popupInputTitle = document.querySelector('.popup__input_title');
const popupInputSubtitle = document.querySelector('.popup__input_subtitle');
const cardContainer = document.querySelector('.cards__items');
const cardTemplate = document.querySelector('#card-template').content;
const popupInputCardName = document.querySelector('.popup__input_card-name');
const popupInputCardLink = document.querySelector('.popup__input_card-link');
const popupImageItem = document.querySelector('.popup__image-item');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupEditProfileSubmitButton = popupEditProfile.querySelector('.popup__submit-button');
const popupAddCardSubmitButton = popupAddCard.querySelector('.popup__submit-button');
const popups = document.querySelectorAll('.popup');
const form = document.forms.addCard;

//Функция создания карточки
function createCard(link, name) {
    const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardName = newCard.querySelector('.cards__title').textContent = name;
    newCard.querySelector('.cards__image').setAttribute('src', link);
    newCard.querySelector('.cards__image').setAttribute('alt', cardName);

    //листенер на кнопку "Лайк"
    newCard.querySelector('.cards__reaction').addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__reaction_enabled');
    });

    //листенер на кнопку "Корзина"
    newCard.querySelector('.cards__garbage').addEventListener('click', () => {
        deleteCard(newCard);
    });

    //листенер на картнику
    newCard.querySelector('.cards__image').addEventListener('click', function () {
        openPopupImage(link, name);
    });

    return newCard;
}

//Перебор массива карточек по умлочанию. Создание карточек
initialCards.forEach(function (card) {
    cardContainer.prepend(createCard(card.link, card.name));
})

//функция удаления карточки
function deleteCard(card) {
    card.remove();
}

//Закрытие попап по Esc
function closePopupByEsc(event) {
    const popupOpened = document.querySelector('.popup_opened');
    if (event.key === 'Escape') {
        closePopup(popupOpened);
    }
}

//Открытие попапа с картинкой
function openPopupImage(link, name) {
    popupImageItem.setAttribute('src', link);
    popupImageItem.setAttribute('alt', name);
    popupImageTitle.textContent = name;
    openPopup(popupImage);
}

popups.forEach((popup) => {
        popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup_opened')) {
                closePopup(popup);
            }
            if (event.target.classList.contains('popup__close-button')) {
                closePopup(popup);
            }
        })
    }
)

//Закрытие попапа
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
    form.reset();
    const inputList = Array.from(popup.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        hideInputError(popup, inputElement);
    })
}

//Открытие попапа
const openPopup = (popup) => {
    const buttonElement = popup.querySelector('.popup__submit-button');
    const inputList = Array.from(popup.querySelectorAll('.popup__input'));
    toggleButtonState(inputList, buttonElement);
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

//Сохранение значений в попапе редактирования профиля
function submitProfile(e) {
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;
    e.preventDefault();
    closePopup(popupEditProfile);
}

//Сохранение значений в попапе добавления карточки
function submitAddCard(e) {
    cardContainer.prepend(createCard(popupInputCardLink.value, popupInputCardName.value));
    e.preventDefault();
    closePopup(popupAddCard);
}

//Получение полей профиля в попапе редактирование профиля. Октрытие попапа
function getFieldProfile() {
    openPopup(popupEditProfile);
    popupInputTitle.value = profileTitle.textContent;
    popupInputSubtitle.value = profileSubtitle.textContent;
}

popupAddCardSubmitButton.addEventListener('click', submitAddCard)

popupEditProfileSubmitButton.addEventListener('click', submitProfile);

buttonEdit.addEventListener('click', () => {
    getFieldProfile();
});

buttonAdd.addEventListener('click', () => {
    openPopup(popupAddCard);
});
