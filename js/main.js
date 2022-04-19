import './util.js';
import {getData} from './api.js';
import {deleteMarkers, createMarker, closePopup} from './map.js';
import './photo.js';
import {debounce} from './util.js';
import {getNewArrayOfAds, onFilterChange} from './filter.js';
import './popup.js';
import {differentFieldValues} from './forms.js';
import {disablePage, activatePage, disableMapFilter, activateMapFilter} from './disable.js';

const ERROR_DELAY = 500;
const TIMEOUT =3000;

const formFilter = document.querySelector('.map__filters');
const typeFilterBlock = formFilter.querySelector('#housing-type');
const priceFilterBlock = formFilter.querySelector('#housing-price');
const roomsFilterBlock = formFilter.querySelector('#housing-rooms');
const guestsFilterBlock = formFilter.querySelector('#housing-guests');
const featuresFilterBlock = formFilter.querySelector('#housing-features');

let points = [];

differentFieldValues();
disablePage();
setTimeout(activatePage, TIMEOUT);
disableMapFilter();
setTimeout(activateMapFilter, TIMEOUT);
closePopup();

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

getData(onSuccessGetData);

