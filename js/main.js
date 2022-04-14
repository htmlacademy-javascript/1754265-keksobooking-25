import './util.js';
import {createOffers} from './data.js';
import './map.js';
import {cardsPopap} from './popup.js';
import {getData} from './api.js';
import {deleteMarkers, createMarker, closePopup, /*renderPins*/} from './map.js';

cardsPopap()
console.log(
  createOffers()
);
import {differentFieldValues} from './forms.js';
differentFieldValues();

import {disablePage, activatePage, disableMapFilter, activateMapFilter} from './disable.js';
disablePage();
setTimeout(activatePage, 3000);
disableMapFilter();
setTimeout(activateMapFilter, 3000);

//getData(renderPins);
deleteMarkers();
createMarker();
closePopup();
