//Навешиваем валидаторы на форму для элементов инпут
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

//Проверка на невалидный инпут
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

//Навешиваем листенеры на инпуты и кнопку сабмита для формы
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

//Дизейблим кнопку сабмита формы, если инпут невалидный
function toggleButtonState(inputList, buttonElement) {
    buttonElement.disabled = hasInvalidInput(inputList);
}

//Показываем ошибку под полем
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.add('popup__input_error');
    errorElement.classList.add('popup__error_visible');
    errorElement.textContent = errorMessage;
};

//Скрываем ошибку под полем
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.remove('popup__input_error');
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
};


//Проверяем, если есть ошибка, то показываем
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

enableValidation();