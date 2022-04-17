import {activatePage, activateMapFilter} from './disable.js';
import {createCustomPopup} from './popup.js';

const ZOOM_DEF_VALUE = 16;
const COORDINATES_DEF_LAT = 35.68950;
const COORDINATES_DEF_LNG = 139.69171;

//Задаем координаты "по умолчанию"
const COORDINATES_DEF = {
  lat: COORDINATES_DEF_LAT,
  lng: COORDINATES_DEF_LNG,
};
//создаем карту
const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
    activateMapFilter();
  })
  .setView({
    lat: COORDINATES_DEF.lat,
    lng: COORDINATES_DEF.lng,
  }, ZOOM_DEF_VALUE);

//добавляем карту
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


//иконка метки
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

//главная метка
const mainPinMarker = L.marker(
  {
    lat: COORDINATES_DEF.lat,
    lng: COORDINATES_DEF.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

//замена иконки метке на метку из библиотеки
const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

//возвращение метки в исходную
const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: COORDINATES_DEF.lat,
    lng: COORDINATES_DEF.lng,
  });

  map.setView({
    lat: COORDINATES_DEF.lat,
    lng: COORDINATES_DEF.lng,
  }, ZOOM_DEF_VALUE);
};

//слой для отрисовки неглавных меток
const markerGroup = L.layerGroup().addTo(map);

const deleteMarkers = () => {
  markerGroup.clearLayers();
};

const createMarker = (point) => {
  const {lat, lng} = point.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createCustomPopup(point));
};

const addressElement = document.querySelector('#address');

function resetAddressValue() {
  addressElement.value = `${COORDINATES_DEF_LAT.toFixed(5)  }, ${  COORDINATES_DEF_LNG.toFixed(5)}`;
}

resetAddressValue();

mainPinMarker.on('moveend', (evt) => {
  const { lng, lat } = evt.target.getLatLng();
  addressElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

//добавляем метку на карту
mainPinMarker.addTo(map);

//закрытие popup
const closePopup = () => {
  map.closePopup();
};

export {deleteMarkers, createMarker, closePopup, resetMap, resetAddressValue};


