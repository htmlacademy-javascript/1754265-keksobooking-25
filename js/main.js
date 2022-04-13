import './util.js';
import {createOffers} from './data.js';
import './map.js';
import {getData} from './api.js';
import {deleteMarkers, createMarker, closePopup} from './map.js';

console.log(
  createOffers()
);
import './popup.js';

import {differentFieldValues} from './forms.js';
differentFieldValues();

import {disablePage, activatePage, disableMapFilter, activateMapFilter} from './disable.js';
disablePage();
setTimeout(activatePage, 3000);
disableMapFilter();
setTimeout(activateMapFilter, 3000);

