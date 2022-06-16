const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
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
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupImageCloseButton = popupImage.querySelector('.popup__close-button');
const popupEditProfileSubmitButton = popupEditProfile.querySelector('.popup__submit-button');
const popupAddCardSubmitButton = popupAddCard.querySelector('.popup__submit-button');

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

//Открытие попапа с картинкой
function openPopupImage(link, name) {
    popupImageItem.setAttribute('src', link);
    popupImageItem.setAttribute('alt', name);
    popupImageTitle.textContent = name;
    togglePopup(popupImage);
}

//Открытие-закрытие попапа
function togglePopup(popup) {
    popup.classList.toggle('popup_opened');
}

//Сохранение значений в попапе редактирования профиля
function submitProfile(e) {
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;
    e.preventDefault();
    togglePopup(popupEditProfile);
}

//Сохранение значений в попапе добавления карточки
function submitAddCard(e) {
    cardContainer.prepend(createCard(popupInputCardLink.value, popupInputCardName.value));
    popupInputCardName.value = '';
    popupInputCardLink.value = '';
    e.preventDefault();
    togglePopup(popupAddCard);
}

//Получение полей профиля в попапе редактирование профиля. Октрытие попапа
function getFieldProfile() {
    togglePopup(popupEditProfile);
    popupInputTitle.value = profileTitle.textContent;
    popupInputSubtitle.value = profileSubtitle.textContent;
}

popupAddCardSubmitButton.addEventListener('click', submitAddCard)

popupEditProfileSubmitButton.addEventListener('click', submitProfile);

editButton.addEventListener('click', () => {
    getFieldProfile();
});

addButton.addEventListener('click', () => {
    togglePopup(popupAddCard);
});
popupEditProfileCloseButton.addEventListener('click', () => {
    togglePopup(popupEditProfile);
})
popupAddCardCloseButton.addEventListener('click', () => {
    togglePopup(popupAddCard);
})
popupImageCloseButton.addEventListener('click', () => {
    togglePopup(popupImage);
})
