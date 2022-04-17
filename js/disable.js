import './popup.js';
const addForm = document.querySelector('.ad-form');
addForm.classList.add('disabled');

export function disablePage(){
  addForm.querySelectorAll('fieldset').forEach((item) => {
item.disabled=true;
  });
};

export function activatePage(){
  addForm.querySelectorAll('fieldset').forEach((item) => {
item.disabled=false;
  });
};

const addFormMapFilter = document.querySelector('.map__filters');
addFormMapFilter.classList.add('disabled');

export function disableMapFilter(){
  addFormMapFilter.querySelectorAll('.map__filter').forEach((item) => {
item.disabled=true;
  });
};

export function activateMapFilter(){
  addFormMapFilter.querySelectorAll('.map__filter').forEach((item) => {
item.disabled=false;
  });
};

