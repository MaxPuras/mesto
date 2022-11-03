import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {
    buttonAdd,
    buttonEdit,
    cardAddForm,
    cardContainer,
    cardTemplate,
    initialCards,
    popupAddCard,
    popupEditProfile,
    popupInputCardLink,
    popupInputCardName,
    popupInputSubtitle,
    popupInputTitle,
    popups,
    profileEditForm,
    profileSubtitle,
    profileTitle
} from "./data.js";
import {closePopup, openPopup} from "./utils.js";

//Объект конфигурации обработки ошибок
const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inputErrorClass: 'popup__input_error',
    errorVisibleClass: 'popup__error_visible',
    errorSelector: '.popup__error'
}

const editProfileFormValidation = new FormValidator(popupEditProfile, configValidation);
const addCardFormValidation = new FormValidator(popupAddCard, configValidation);

//Перебор массива карточек по умлочанию. Создание карточек
initialCards.forEach((cardData) => {
    cardContainer.prepend(renderCard(cardData));
})

//Слушатель на клик по оверлею. Закрытие попапа кликом вне области окна
popups.forEach((popup) => {
        popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close-button')) {
                closePopup(popup)
            }
        })
    }
)

//Создание экземпляра класса создания карточки
function renderCard(card) {
    return new Card(card, cardTemplate).createCard();
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
    cardContainer.prepend(renderCard({name: popupInputCardName.value, link: popupInputCardLink.value}));
    e.preventDefault();
    closePopup(popupAddCard);
}

//Получение полей профиля в попапе редактирование профиля. Октрытие попапа
function openEditProfile() {
    profileEditForm.reset();
    editProfileFormValidation.enableValidation();
    addCardFormValidation.enableValidation();
    openPopup(popupEditProfile);
    popupInputTitle.value = profileTitle.textContent;
    popupInputSubtitle.value = profileSubtitle.textContent;
}

//Открытие модалки добавления карточки
function openAddCard() {
    cardAddForm.reset();
    openPopup(popupAddCard, false);
    addCardFormValidation.enableValidation();
    editProfileFormValidation.enableValidation();
}

popupAddCard.addEventListener('submit', handleSubmitAddCard)

popupEditProfile.addEventListener('submit', handleSubmitProfile);

buttonEdit.addEventListener('click', openEditProfile);

buttonAdd.addEventListener('click', openAddCard);
