import {defineRoomWord, defineGuestWord} from './util.js';
//import {closePopup} from './util.js';

function differentFieldValues() {
  const bookingForm = document.querySelector('.ad-form');

  const pristine = new Pristine(bookingForm, {
    classTo: 'ad-form',
    errorClass: 'ad-form--invalid',
    successClass: 'ad-form--valid',
    errorTextParent: 'ad-form',
    errorTextTag: 'span',
    errorTextClass: 'ad-form__error',
  });

  const minPrice = {
    'bungalow': 0,
    'flat': 1000,
    'hotel': 3000,
    'house': 5000,
    'palace': 10000
  };

  const roomNumber = {
    '1': ['1'],
    '2': ['2', '1'],
    '3': ['3', '2', '1'],
    '100': ['0'],
  };

  const typeField = bookingForm.querySelector('#type');
  const roomNumberValue = bookingForm.querySelector('#room_number');
  const possibleCapacity = bookingForm.querySelector('#capacity');
  const possibletimein = bookingForm.querySelector('#timein');
  const possibletimeout = bookingForm.querySelector('#timeout');
  const possiblePrice = bookingForm.querySelector('#price');
  const resetButton = bookingForm.querySelector('.ad-form__reset');
  const submitButton = bookingForm.querySelector('.ad-form__submit');

  function validateRoomNumberValue (value) {
    return roomNumber[value].includes(possibleCapacity.value);
  }

  function validateCapacity (value) {
    return roomNumber[roomNumberValue.value].includes(value);
  }

  function getRoomNumberValueErrorMessage (value) {
    return `${value} ${defineRoomWord(value)} для ${possibleCapacity.value} ${defineGuestWord(possibleCapacity.value)} невозможно`;
  }

  function getCapacityErrorMessage (value) {
    return `${roomNumberValue.value} ${defineRoomWord(roomNumberValue.value)} для ${value} ${defineGuestWord(value)} невозможно`;
  }

  pristine.addValidator(roomNumberValue, validateRoomNumberValue, getRoomNumberValueErrorMessage);
  pristine.addValidator(possibleCapacity, validateCapacity, getCapacityErrorMessage);

  //title
  function validateHeader(value) {
    return value.length >= 30 && value.length <= 100;
  }

  pristine.addValidator(bookingForm.querySelector('#title'), validateHeader, 'От 30 до 100 символов');

  //price
  typeField.addEventListener('change', () => {
    possiblePrice.placeholder = minPrice[typeField.value];
  });

  function validatePrice (value) {
    return Number(value) >= minPrice[typeField.value];

  }

  function getPriceErrorMessage (value) {
    return `Минимальная цена ${minPrice[typeField.value]} руб. Факт: ${value}`;
  }

  pristine.addValidator(possiblePrice, validatePrice, getPriceErrorMessage);

  //Слайдер
  const sliderElement = bookingForm.querySelector('.ad-form__slider');

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: minPrice[typeField.value],
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {

        return parseInt(value);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    possiblePrice.value = sliderElement.noUiSlider.get();
  });

  possiblePrice.addEventListener('input', () => sliderElement.noUiSlider.set(price.value));
  typeField.addEventListener('change', () => {
    sliderElement.noUiSlider.updateOptions({
      start: minPrice[typeField.value],
    });
  });

  //Check in and out

  possibletimein.addEventListener('change', () => {

    possibletimeout.selectedIndex = possibletimein.selectedIndex;
  });

  possibletimeout.addEventListener('change', () => {
    possibletimein.selectedIndex = possibletimeout.selectedIndex;
  });

  bookingForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      bookingForm.submit();
    } else {
      const errorElement = document.querySelector('.ad-form__error');
      errorElement.style.display = 'block';
      errorElement.textContent = 'Заполните все необходимые поля';
    }
    const blockSubmitButton = () => {
      submitButton.disabled = true;
      submitButton.textContent = 'Идет публикация формы...';
    };

    const unblockSubmitButton = () => {
      submitButton.disabled = false;
      submitButton.textContent = 'Опубликовать';
    };



    const setUserFormSubmit = (onSuccess) => {
      wizardForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const isValid = pristine.validate();
        if (isValid) {
          blockSubmitButton();
          sendData(
            () => {
              onSuccess();
              unblockSubmitButton();
            },
            () => {
              showAlert('Не удалось отправить форму. Попробуйте ещё раз');
              unblockSubmitButton();
            },
            new FormData(evt.target),
          );
        }
      });
    };

  });
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
  });
}

export {differentFieldValues};
