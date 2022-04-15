const serverLink = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(`${serverLink}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail('Информация не была загружена, обновите страницу');
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
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch((error) => {
      onFail(error);
    });
};

export {getData, sendData};
