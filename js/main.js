import './util.js';
import {getData} from './api.js';
import {deleteMarkers, createMarker, closePopup} from './map.js';
import './photo.js';
import {showAlert, debounce} from './util.js';
import {onFilterChange} from './filter.js';


function onSuccess(points) {
  console.log(points);
  points.forEach((point) => {
    createMarker(point);
  });
}


function onFail(error) {
  console.error(error);
}

getData(onSuccess, onFail);
//передать в onSuccess первые 10 меток через  метод .slice)

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
const housingTypeFilter = formFilter.querySelector('#housing-type');
const housingPriceFilter = formFilter.querySelector('#housing-price');
const housingRoomsFilter = formFilter.querySelector('#housing-rooms');
const housingGuestsFilter = formFilter.querySelector('#housing-guests');
const housingFeaturesFilter = formFilter.querySelector('#housing-features');


getData(
  (ads) => {
    createMarker(ads);
    onFilterChange(debounce(
      () => getSimilarAd(ads),
      ERROR_DELAY), housingTypeFilter);
    onFilterChange(debounce(
      () => getSimilarAd(ads),
      ERROR_DELAY), housingPriceFilter);
    onFilterChange(debounce(
      () => getSimilarAd(ads),
      ERROR_DELAY), housingRoomsFilter);
    onFilterChange(debounce(
      () => getSimilarAd(ads),
      ERROR_DELAY), housingGuestsFilter);
    onFilterChange(debounce(
      () => getSimilarAd(ads),
      ERROR_DELAY), housingFeaturesFilter);
  },
  () => {
    showAlert('Не удалось загрузить данные с сервера!');

  }
);

