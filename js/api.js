const serverLink = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  const offersList = fetch(`${serverLink}/data`)
    .then((response) => response.json())
          .then((offers) => {
            onSuccess(offers);
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
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
