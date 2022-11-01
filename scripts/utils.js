import {popupImage, popupImageItem, popupImageTitle, popups} from "./data.js";

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
export const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

//Открытие попапа
export const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

//Закрытие попап по Esc
export function closePopupByEsc(event) {
    if (event.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

//Открытие попапа с картинкой
export function openPopupImage(card) {
    popupImageItem.setAttribute('src', card._cardLink);
    popupImageItem.setAttribute('alt', card._cardName);
    popupImageTitle.textContent = card._cardName;
    openPopup(popupImage);
}

