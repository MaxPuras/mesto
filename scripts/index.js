let editButton = document.querySelector('.profile__edit-button')
let popupProfile = document.querySelector('.popup-profile')
let popupCloseButton = document.querySelector('.popup-profile__close-button')
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');
let popupInputTitle = document.querySelector('.popup__input_title');
let popupInputSubtitle = document.querySelector('.popup__input_subtitle');
let popupSubmitButton = document.querySelector('.popup-profile__submit-button');
let cardContainer = document.querySelector('.cards__items');
const cardTemplate = document.querySelector('#card-template').content;
let addButton = document.querySelector('.profile__add-button');

const initialCards = [
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

function renderCardList(){
    initialCards.forEach(function (card) {
        const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);
        newCard.querySelector('.cards__title').textContent = card.name;
        newCard.querySelector('.cards__image').setAttribute('src', card.link);
        newCard.querySelector('.cards__image').setAttribute('alt', card.name);

        newCard.querySelector('.cards__reaction').addEventListener('click', function (evt) {
            evt.target.classList.toggle('cards__reaction_enabled');
        });

        cardContainer.append(newCard);
    })
}

renderCardList();

function addCard() {
    const newCard = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardName = newCard.querySelector('.cards__title').textContent = "card.name";
    newCard.querySelector('.cards__image').setAttribute('src', "card.link");
    newCard.querySelector('.cards__image').setAttribute('alt', cardName);

    newCard.querySelector('.cards__reaction').addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__reaction_enabled');
    });
    cardContainer.prepend(newCard);
}

function submitPopup(e) {
    e.preventDefault();
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;
    togglePopup();
}

function togglePopup() {
    popupProfile.classList.toggle('popup-profile_opened')
    if (popupProfile.classList.contains('popup-profile_opened')) {
        popupInputTitle.value = profileTitle.textContent;
        popupInputSubtitle.value = profileSubtitle.textContent;
    }
}

editButton.addEventListener('click', togglePopup);
popupSubmitButton.addEventListener('click', submitPopup);
popupCloseButton.addEventListener('click', togglePopup);
addButton.addEventListener('click', addCard);
