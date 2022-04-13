import {createOffers} from './data.js';

const differentCardsTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarOffers = createOffers();
const firsObj = similarOffers[0];


const cardsElement = differentCardsTemplate.cloneNode(true);
cardsElement.querySelector('.popup__title').textContent = firsObj.offer.title;
cardsElement.querySelector('.popup__text--address').textContent = firsObj.offer.address;
cardsElement.querySelector('.popup__text--capacity').textContent = `${firsObj.offer.rooms} комнаты для ${firsObj.offer.guests} гостей`;

if (firsObj.offer.price === 0) {
  cardsElement.querySelector('.popup__text--price').add('hidden');
} else {
  cardsElement.querySelector('.popup__text--price').textContent = `${firsObj.offer.price} ₽/ночь`;
};

cardsElement.querySelector('.popup__text--time').textContent = `Заезд после ${firsObj.offer.checkin}, выезд до ${firsObj.offer.checkout}`;
cardsElement.querySelector('.popup__description').textContent = firsObj.offer.description;
cardsElement.querySelector('.popup__avatar').src = firsObj.author.avatar;
//Features

const featureContainer = cardsElement.querySelector('.popup__features');

featureContainer.innerHTML = '';

firsObj.offer.features.forEach((someFeature) => {
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

typeContainer.textContent = apartmentType[firsObj.offer.type];

const photoContainer = cardsElement.querySelector('.popup__photos');

photoContainer.innerHTML = '';

firsObj.offer.photos.forEach((photo) => {
  const somePhoto = document.createElement('img');

  somePhoto.classList.add('popup__photo');
  somePhoto.src = photo;
  somePhoto.height = 40;
  somePhoto.width = 45;

  photoContainer.append(somePhoto);
});


//document.querySelector('#map-canvas').append(cardsElement);

