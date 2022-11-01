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

//Перебор массива карточек по умлочанию. Создание карточек
initialCards.forEach((cardData) => {
    const card = new Card(cardData, cardTemplate);
    cardContainer.prepend(card.createCard());
})

//Объект конфигурации обработки ошибок
const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inputErrorClass: 'popup__input_error',
    errorVisibleClass: 'popup__error_visible',
    errorSelector: '.popup__error'
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
    cardContainer.prepend(new Card(card, cardTemplate).createCard());
    e.preventDefault();
    closePopup(popupAddCard);
}

//Получение полей профиля в попапе редактирование профиля. Октрытие попапа
function openEditProfile() {
    profileEditForm.reset();
    new FormValidator(popupEditProfile, configValidation).enableValidation();
    openPopup(popupEditProfile);
    popupInputTitle.value = profileTitle.textContent;
    popupInputSubtitle.value = profileSubtitle.textContent;
}

//Открытие модалки добавления карточки
function openAddCard() {
    cardAddForm.reset();
    openPopup(popupAddCard, false);
    new FormValidator(popupAddCard, configValidation).enableValidation();
}

popupAddCard.addEventListener('submit', handleSubmitAddCard)

popupEditProfile.addEventListener('submit', handleSubmitProfile);

buttonEdit.addEventListener('click', openEditProfile);

buttonAdd.addEventListener('click', openAddCard);
