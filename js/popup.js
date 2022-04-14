//import {createOffers} from './data.js';

const differentCardsTemplate = document.querySelector('#card').content.querySelector('.popup');

// const similarOffers = createOffers();
//const firsObj = similarOffers[0];

const cardsPopap = (cards) =>  {
  const cardsElement = differentCardsTemplate.cloneNode(true);
  cardsElement.querySelector('.popup__title').textContent = cards.offer.title;
  cardsElement.querySelector('.popup__text--address').textContent = cards.offer.address;
  cardsElement.querySelector('.popup__text--capacity').textContent = `${cards.offer.rooms} комнаты для ${cards.offer.guests} гостей`;

  if (cards.offer.price === 0) {
    cardsElement.querySelector('.popup__text--price').add('hidden');
} else {
    cardsElement.querySelector('.popup__text--price').textContent = `${cards.offer.price} ₽/ночь`;
};

  cardsElement.querySelector('.popup__text--time').textContent = `Заезд после ${cards.offer.checkin}, выезд до ${cards.offer.checkout}`;
  cardsElement.querySelector('.popup__description').textContent = cards.offer.description;
  cardsElement.querySelector('.popup__avatar').src = cards.author.avatar;
//Features

  const featureContainer = cardsElement.querySelector('.popup__features');

  featureContainer.innerHTML = '';

  cards.offer.features.forEach((someFeature) => {
    const featureList = document.createElement('li');

    featureList.classList.add('popup__feature');
    featureList.classList.add('popup__feature--'.concat(someFeature));

    featureContainer.append(featureList);

});

//Types
  const apartmentType = {
    bungalow: 'Бунгало',
    flat: 'Квартира',
    hotel: 'Отель',
    house: 'Дом',
    palace: 'Дворец',
};

  const typeContainer = cardsElement.querySelector('.popup__type');

  typeContainer.textContent = apartmentType[cards.offer.type];

  const photoContainer = cardsElement.querySelector('.popup__photos');

  photoContainer.innerHTML = '';

  cards.offer.photos.forEach((photo) => {
    const somePhoto = document.createElement('img');

    somePhoto.classList.add('popup__photo');
    somePhoto.src = photo;
    somePhoto.height = 40;
    somePhoto.width = 45;

    photoContainer.append(somePhoto);
});

  return cardsElement
}

export{cardsPopap};


//document.querySelector('#map-canvas').append(cardsElement);

