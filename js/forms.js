const bookingForm = document.querySelector('.form');

const pristine = new Pristine(addingForm, {
  classTo: 'ad-form',
  errorClass: 'ad-form--invalid',
  successClass: 'ad-form--valid',
  errorTextParent: 'ad-form',
  errorTextTag: 'span'
  errorTextClass: 'ad-form__error',
});

function validateHeader (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  bookingForm.querySelector('#title'),
  validateHeader,
  'От 30 до 100 символов'
);

function validatePrice (value) {
  return value.max <= 100000;
}

pristine.addValidator(
  bookingForm.querySelector('#price'),
  validatePrice,
  'не более 100000'
);


const typeField = bookingForm.querySelector('#type');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
function validateType (value) {
  return value.length && parseInt(typeField.value) >= minPrice[typeField.value];
};

function getPriceErrorMessage () {
  return `Цена не может быть ниже чем ${minPrice[typeField.value]}`;
};

pristine.addValidator(typeField, validateType, getPriceErrorMessage);

function onTypeChange () {
  typeField.placeholder = minAmount[this.value];
  pristine.validate(typeField);
}

minPrice
  .querySelectorAll('[name="type"]')
  .forEach((item) => item.addEventListener('change', onTypeChange));

bookingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
