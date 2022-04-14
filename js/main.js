import './util.js';
import {getData} from './api.js';
import {deleteMarkers, createMarker, closePopup} from './map.js';

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

import './popup.js';
import {differentFieldValues} from './forms.js';
differentFieldValues();

import {disablePage, activatePage, disableMapFilter, activateMapFilter} from './disable.js';
disablePage();
setTimeout(activatePage, 3000);
disableMapFilter();
setTimeout(activateMapFilter, 3000);
