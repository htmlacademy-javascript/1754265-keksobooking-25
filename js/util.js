function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};  // Результат: целое число из диапазона "от...до" (источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
getRandomNumber(1, Infinity);

function getRandomResult(min, max, maxNumber = 0) {
  if (min > max || min < 0 || max <= 0) {
    return ('Неверный диапазон!');
  };

  const numberDegree = 10 ** maxNumber;
  const result = ((Math.random() * (max - min) + min) * numberDegree) / numberDegree;
  return +result.toFixed(maxNumber);
}; // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой" (источник: https://qna.habr.com/q/999157)
getRandomResult(6, 6, 9);

function getRandomNumbers(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

function defineRoomWord(count) {
  const roomsCount = Number(count);
  let roomWord = 'комнаты';
  if (roomsCount === 1) {
    roomWord = 'комната';
  } else if (roomsCount > 3) {
    roomWord = 'комнат';
  }
  return roomWord;
}

function defineGuestWord(count) {
  const guestsCount = Number(count);
  let guestWord = 'гостей';
  const string = guestsCount.toString();
  const lastSymbol = string[string.length - 1];
  if (lastSymbol === '1') {
    guestWord = 'гостя';
  }
  return guestWord;
}


const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);

};

const getTemplate = (templateId) => {
  const template = document.querySelector(`#${templateId}`);
  const clone = template.content.cloneNode(true).children[0];
  return clone;
};

let popup;

const onEscapePush = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    popup.remove();
    document.removeEventListener(onEscapePush);
  }
};

const showSuccessPopup = () => {
  popup = getTemplate('success');
  document.addEventListener('keydown', onEscapePush);
  document.body.appendChild(popup);
};

const showErrorPopup = () => {
  popup = getTemplate('error');
  document.addEventListener('keydown', onEscapePush);
  document.body.appendChild(popup);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const Escape = 'Escape';
const EscapeKey = (evt) => evt.key === Escape;
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showMessage = (template) => {
  const message =  template.cloneNode(true);

  const onEscKeydown = (evt) => {
    if (EscapeKey(evt)) {
      evt.preventDefault();
      message.remove();
    }
  };

  message.addEventListener('click', () => message.remove());
  document.addEventListener('keydown', onEscKeydown);
  document.body.append(message);
};


const successMessage = () => showMessage(successTemplate);
const failMessage = () => showMessage(errorTemplate);
export {
  getRandomNumber,
  getRandomResult,
  getRandomNumbers,
  defineRoomWord,
  defineGuestWord,
  debounce,
  isEscapeKey,
  isEnterKey,
  showAlert,
  successMessage,
  failMessage,
  showSuccessPopup,
  showErrorPopup
};
