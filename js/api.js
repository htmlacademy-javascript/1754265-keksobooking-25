import {showAlert} from './util.js';
const serverLink = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(`${serverLink}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Информация не была загружена, обновите страницу');
        onFail(`Не удалось загрузить данные с сервера. Статус ответа: ${response.status}`);
      }})
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onFail(error);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    serverLink,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        onFail(`Не удалось отправить данные на сервер. Статус ответа: ${response.status}`);
      }
    })
    .catch((error) => {
      onFail(error);
    });
};

export {getData, sendData};
