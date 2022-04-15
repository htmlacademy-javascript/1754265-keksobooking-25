const createCustomPopup = (point) => {

  const {offer, author} = point;

  const differentCardsTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardsElement = differentCardsTemplate.cloneNode(true);

  cardsElement.querySelector('.popup__title').textContent = offer.title;
  cardsElement.querySelector('.popup__text--address').textContent = offer.address;
  cardsElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  if (offer.price === 0) {
    cardsElement.querySelector('.popup__text--price').add('hidden');
  } else {
    cardsElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  }

  cardsElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardsElement.querySelector('.popup__description').textContent = offer.description;
  cardsElement.querySelector('.popup__avatar').src = author.avatar;

  //Features
  const featureContainer = cardsElement.querySelector('.popup__features');

  featureContainer.innerHTML = '';

  if (offer.features) {
    offer.features.forEach((someFeature) => {
      const featureList = document.createElement('li');
      featureList.classList.add('popup__feature');
      featureList.classList.add('popup__feature--'.concat(someFeature));
      featureContainer.append(featureList);
    });
  }

  //Types
  const apartmentType = {
    bungalow: 'Бунгало',
    flat: 'Квартира',
    hotel: 'Отель',
    house: 'Дом',
    palace: 'Дворец',
  };

  const typeContainer = cardsElement.querySelector('.popup__type');
  typeContainer.textContent = apartmentType[offer.type];

  const photoContainer = cardsElement.querySelector('.popup__photos');
  photoContainer.innerHTML = '';

  if (offer.photos) {
    offer.photos.forEach((photo) => {
      const somePhoto = document.createElement('img');

      somePhoto.classList.add('popup__photo');
      somePhoto.src = photo;
      somePhoto.height = 40;
      somePhoto.width = 45;

      photoContainer.append(somePhoto);
    });
  }

  return cardsElement;
};

export {createCustomPopup};


