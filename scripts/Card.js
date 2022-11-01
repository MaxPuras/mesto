export {Card};
import {openPopupImage} from "./utils.js";

class Card {
    constructor(card, templateSelector) {
        this._cardName = card.name;
        this._cardLink = card.link;
        this._templateSelector = templateSelector;
    }

    //Получение темплейта
    _getTemplate() {
        return this._templateSelector
            .querySelector('.cards__item')
            .cloneNode(true)
    }

    //Метод создания карточки
    createCard() {
        this._cardElement = this._getTemplate();
        this._cardElement.querySelector('.cards__title').textContent = this._cardName;
        this._cardElement.querySelector('.cards__image').src = this._cardLink;
        this._cardElement.querySelector('.cards__image').alt = this._cardName;
        this._setListeners();
        return this._cardElement;
    }

    //Установка слушателей на кнопки действий
    _setListeners() {
        //Слушатель на кнопку "Лайк"
        this._cardElement.querySelector('.cards__reaction').addEventListener('click', function (evt) {
            evt.target.classList.toggle('cards__reaction_enabled');
        });

        //Слушатель на кнопку "Корзина"
        this._cardElement.querySelector('.cards__garbage').addEventListener('click', () => {
            this._deleteCard();
        });

        //Слушатель на клик по картинке
        this._cardElement.querySelector('.cards__image').addEventListener('click', () => {
            this._openPopupImage();
        });
    }

    //Вызов метода удаления карточки
    _deleteCard() {
        this._cardElement.remove();
    }

    //Вызов метода открытия попапа картинки
    _openPopupImage() {
        openPopupImage(this);
    }

}
