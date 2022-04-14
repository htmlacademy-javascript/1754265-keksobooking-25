import {getRandomNumber, getRandomResult, getRandomNumbers} from './util.js';
import {getData} from './api.js';

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',

];

const TITLES = [
  'Невероятиное предложение',
  'Выгодное предложение',
  'Супер-предложение',
  'Лучшее предложение',
  'Низкая цена',
  'Котики ждут',
  'Будет много мягких котиков',
  'Замуррчательное предложение',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const DESCRIPTIONS = [
  'Просторное помещение',
  'Светлое пространство',
  'С картинами котиков',
  'С отличным видом на море',
  'С 2-мя балконами',
  'С 2-мя ванными',
  'С диваном',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',

];
//код для features. Источник:https://ru.stackoverflow.com/questions/1293985/
function getArrayFeatures(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomNumbers(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumbers(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;



}
//код для features. Источник:https://ru.stackoverflow.com/questions/1293985/

function getArrayPhotos(photos) {
  const maxLengthPhotos = photos.length;
  const lengthOfArrayPhotos = getRandomNumbers(1, maxLengthPhotos);
  const arrayPhotos = [];

  while (arrayPhotos.length < lengthOfArrayPhotos) {
    const indexOfElPhotos = getRandomNumbers(0, maxLengthPhotos - 1);
    const elPhotos = photos[indexOfElPhotos];

    if (!arrayPhotos.includes(elPhotos)) {
      arrayPhotos.push(elPhotos);
    }
  }
  return arrayPhotos;

}

const SIMILAR_OFFERS_COUNT = 10;
const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const author = () => {
  return
};

const offer = () => {
  return
};


const location1 = () => {
  return
};


//const similarOffers = getData();
// for (let i=0; i<SIMILAR_OFFERS_COUNT; i++) {
//   const location = {
//     lat: getRandomResult (35.65000, 35.70000, 5),
//     lng: getRandomResult (139.70000, 139.80000, 5),
//   };
//   similarOffers.push({
//     location: location,
//     author: {
//       avatar: getRandomArrayElement(AVATARS),
//     },
//     offer: {
//       title: getRandomArrayElement(TITLES),
//       address: `${location.lat}, ${location.lng}`,
//       price: getRandomNumber(500, 500000),
//       type: getRandomArrayElement(TYPES),
//       rooms: getRandomNumber(1,10),
//       guests: getRandomNumber(1,20),
//       checkin: getRandomArrayElement(CHECKINS),
//       checkout: getRandomArrayElement(CHECKOUTS),
//       features: getArrayFeatures(features),
//       description: getRandomArrayElement(DESCRIPTIONS),
//       photos: getArrayPhotos(photos),

//     },


//   });
// };

function createOffers() {
  return Array.from(similarOffers);
};

export {createOffers};


