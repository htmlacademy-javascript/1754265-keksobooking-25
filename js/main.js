import './util.js';
import {getData} from './api.js';
import {deleteMarkers, createMarker, closePopup} from './map.js';
import './photo.js';
import {debounce} from './util.js';
import {getNewArrayOfAds, onFilterChange} from './filter.js';

//передать в onSuccess первые 10 меток через  метод .slice)

let points = [];

import './popup.js';
import {differentFieldValues} from './forms.js';
differentFieldValues();

import {disablePage, activatePage, disableMapFilter, activateMapFilter} from './disable.js';
disablePage();
setTimeout(activatePage, 3000);
disableMapFilter();
setTimeout(activateMapFilter, 3000);


const ERROR_DELAY = 500;

const formFilter = document.querySelector('.map__filters');
const typeFilterBlock = formFilter.querySelector('#housing-type');
const priceFilterBlock = formFilter.querySelector('#housing-price');
const roomsFilterBlock = formFilter.querySelector('#housing-rooms');
const guestsFilterBlock = formFilter.querySelector('#housing-guests');
const featuresFilterBlock = formFilter.querySelector('#housing-features');

const filerChangeHandler = debounce(
  () => {
    const ads = getNewArrayOfAds(points);
    deleteMarkers();
    ads.forEach((point) => {
      createMarker(point);
    });
  },
  ERROR_DELAY
);

function onSuccessGetData(ads) {
  console.log(ads);

  points = ads;

  points.forEach((point, index) => {
    if (index <= 9) {
      createMarker(point);
    }
  });

  onFilterChange(filerChangeHandler, typeFilterBlock);
  onFilterChange(filerChangeHandler, priceFilterBlock);
  onFilterChange(filerChangeHandler, roomsFilterBlock);
  onFilterChange(filerChangeHandler, guestsFilterBlock);
  onFilterChange(filerChangeHandler, featuresFilterBlock);
}

function onFailedGetData(error) {
  console.error(error);
}

getData(onSuccessGetData, onFailedGetData);

