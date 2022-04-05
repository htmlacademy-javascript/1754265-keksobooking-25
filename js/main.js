import './util.js';
import {createOffers} from './data.js';

console.log(
  createOffers()
);
import './popup.js';
import {disablePage, activatePage, disableMapFilter, activateMapFilter} from './disable.js';
disablePage();
setTimeout(activatePage, 3000);
disableMapFilter();
setTimeout(activateMapFilter, 3000);
/*
import {validateHeader, validatePrice} from './forms.js';
validateHeader();
validatePrice ();*/
