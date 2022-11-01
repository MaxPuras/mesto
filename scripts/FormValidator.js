export class FormValidator {
    constructor(popup, config) {
        this._popup = popup;
        this._config = config;
    }

    //Навешиваем валидаторы на форму для элементов инпут
    enableValidation() {
        this._popup.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this._setEventListeners(this._popup);
        this._updateValidity();
    };

//Проверка на невалидный инпут
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

//Навешиваем листенеры на инпуты и кнопку сабмита для формы
    _setEventListeners() {
        const inputList = Array.from(this._popup.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._popup.querySelector(this._config.submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

//Дизейблим кнопку сабмита формы, если инпут невалидный
    _toggleButtonState(inputList, buttonElement) {
        buttonElement.disabled = this._hasInvalidInput(inputList);
    }

//Показываем ошибку под полем
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._popup.querySelector(`${this._config.errorSelector}_${inputElement.id}`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.classList.add(this._config.errorVisibleClass);
        errorElement.textContent = errorMessage;
    };

//Скрываем ошибку под полем
    _hideInputError(inputElement) {
        const errorElement = this._popup.querySelector(`${this._config.errorSelector}_${inputElement.id}`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorVisibleClass);
        errorElement.textContent = '';
    };


//Проверяем, если есть ошибка, то показываем
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

//Обновление валидации и доступности кнопки сабмит при открытии формы
    _updateValidity() {
        const buttonElement = this._popup.querySelector(this._config.submitButtonSelector);
        const inputList = Array.from(this._popup.querySelectorAll(this._config.inputSelector));
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        })
    }

}