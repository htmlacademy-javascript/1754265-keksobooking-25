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

const addFormMap = document.querySelector('.map__filters');
addFormMap.classList.add('disabled');

export function disableMapFilter(){
  addFormMap.querySelectorAll('.map__filter').forEach((item) => {
item.disabled=true;
  });
};

export function activateMapFilter(){
  addFormMap.querySelectorAll('.map__filter').forEach((item) => {
item.disabled=false;
  });
};

