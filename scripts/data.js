export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupAddCard = document.querySelector('.popup_add-card');
export const profileTitle = document.querySelector('.profile__info-title');
export const profileSubtitle = document.querySelector('.profile__info-subtitle');
export const popupInputTitle = document.querySelector('.popup__input_title');
export const popupInputSubtitle = document.querySelector('.popup__input_subtitle');
export const cardContainer = document.querySelector('.cards__items');
export const cardTemplate = document.querySelector('#card-template').content;
export const popupInputCardName = document.querySelector('.popup__input_card-name');
export const popupInputCardLink = document.querySelector('.popup__input_card-link');
export const popups = document.querySelectorAll('.popup');
export const forms = document.forms;
export const cardAddForm = forms.addCard;
export const profileEditForm = forms.editProfile;
export const popupImageItem = document.querySelector('.popup__image-item');
export const popupImageTitle = document.querySelector('.popup__image-title');
export const popupImage = document.querySelector('.popup_image');

//Массив карточек по умолчанию
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];