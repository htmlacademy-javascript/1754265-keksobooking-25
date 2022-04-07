<<<<<<< HEAD
=======


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

  /*const roomNumber = {
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
    100: [0]
  };*/

  const roomNumber = {
    '1': ['1'],
    '2': ['2', '1'],
    '3': ['3', '2', '1'],
    '100': ['0']
  };

  const typeField = bookingForm.querySelector('#type');
  const roomNumberValue = bookingForm.querySelector('#room_number');
  const possibleCapacity = bookingForm.querySelector('#capacity');
  const possibletimein = bookingForm.querySelector('#timein');
  const possibletimeout = bookingForm.querySelector('#timeout');
  const possiblePrice = bookingForm.querySelector('#price');


  function validateCapacity () {
    return roomNumber[roomNumberValue.value].includes(possibleCapacity.value);
  }

  function getCapacityErrorMessage () {
    return `
      ${roomNumberValue.value}
      ${possibleCapacity.value.toLowerCase()}
      ${roomNumberValue.value === '1' ? 'гостя невозможно' : 'гостей невозможно'}
    `;
  }

pristine.addValidator(roomNumberValue, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(possibleCapacity, validateCapacity, getCapacityErrorMessage);

 //title
  function validateHeader(value) {
    return value.length >= 30 && value.length <= 100;
  }

  pristine.addValidator(
    bookingForm.querySelector('#title'),
    validateHeader,
    'От 30 до 100 символов'
  );
//price
  typeField.addEventListener('change', () => {
    possiblePrice.placeholder = minPrice[typeField.value];
});

  function validatePrice (value) {
    return value >= minPrice[typeField.value];
  }

  function getPriceErrorMessage () {
    return `Минимальная цена ${minPrice[typeField.value]} руб.`;
  }
  pristine.addValidator(possiblePrice, validatePrice, getPriceErrorMessage);


//rooms & capacity

  /*function validateNumberOfRooms() {
    return roomNumber[roomNumberValue.value].includes(possibleCapacity.value);
  }
  function getRoomNumberErrorMessage() {
    return `Выберите другое количество гостей`;
  }

  pristine.addValidator(possibleCapacity, validateNumberOfRooms, getRoomNumberErrorMessage);
*/

//Check in and out

  possibletimein.addEventListener('change', function () {
    possibletimeout.selectedIndex = possibletimein.selectedIndex;
  });

  possibletimeout.addEventListener('change', function () {
    possibletimein.selectedIndex = possibletimeout.selectedIndex;
  });

  bookingForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });


};

export {differentFieldValues};
>>>>>>> 53c1c4c (8.13 Правда или действие)
