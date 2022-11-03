export class FormValidator {
    constructor(popup, config) {
        this._popup = popup;
        this._config = config;
        this._inputList = Array.from(this._popup.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._popup.querySelector(this._config.submitButtonSelector);
    }

    //Навешиваем валидаторы на форму для элементов инпут
    enableValidation() {
        this._popup.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this._setEventListeners();
        this._updateValidity();
    };

//Проверка на невалидный инпут
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

//Навешиваем листенеры на инпуты и кнопку сабмита для формы
    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

//Дизейблим кнопку сабмита формы, если инпут невалидный
    _toggleButtonState() {
        this._buttonElement.disabled = this._hasInvalidInput();
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
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        })
    }

}