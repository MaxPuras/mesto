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
const popups = document.querySelectorAll('.popup');
const forms = document.forms;
const сardAddForm = forms.addCard;
const profileEditForm = forms.editProfile;

//Функция создания карточки
function createCard(card) {
    const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardName = newCard.querySelector('.cards__title').textContent = card.name;
    newCard.querySelector('.cards__image').setAttribute('src', card.link);
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
        openPopupImage(card);
    });

    return newCard;
}

//Перебор массива карточек по умлочанию. Создание карточек
initialCards.forEach(function (card) {
    cardContainer.prepend(createCard(card));
})

//функция удаления карточки
function deleteCard(card) {
    card.remove();
}

//Закрытие попап по Esc
function closePopupByEsc(event) {
    if (event.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

//Открытие попапа с картинкой
function openPopupImage(card) {
    popupImageItem.setAttribute('src', card.link);
    popupImageItem.setAttribute('alt', card.name);
    popupImageTitle.textContent = card.name;
    openPopup(popupImage);
}

//Слушатель на клик по оверлею. Закрытие попапа кликом вне области окна
popups.forEach((popup) => {
        popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close-button')) {
                closePopup(popup)
            }
        })
    }
)

//Закрытие попапа
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

//Открытие попапа
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

//Сохранение значений в попапе редактирования профиля
function handleSubmitProfile(e) {
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;
    e.preventDefault();
    closePopup(popupEditProfile);
}

//Сохранение значений в попапе добавления карточки
function handleSubmitAddCard(e) {
    const card = {name: popupInputCardName.value, link: popupInputCardLink.value}
    cardContainer.prepend(createCard(card));
    e.preventDefault();
    closePopup(popupAddCard);
}

//Получение полей профиля в попапе редактирование профиля. Октрытие попапа
function openEditProfile() {
    profileEditForm.reset();
    updateValidity(popupEditProfile);
    openPopup(popupEditProfile);
    popupInputTitle.value = profileTitle.textContent;
    popupInputSubtitle.value = profileSubtitle.textContent;
}

function openAddCard() {
    сardAddForm.reset();
    openPopup(popupAddCard, false);
    updateValidity(popupAddCard);
}

popupAddCard.addEventListener('submit', handleSubmitAddCard)

popupEditProfile.addEventListener('submit', handleSubmitProfile);

buttonEdit.addEventListener('click', openEditProfile);

buttonAdd.addEventListener('click', openAddCard);
