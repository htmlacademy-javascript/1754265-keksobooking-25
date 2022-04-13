import {activatePage, activateMapFilter} from './disable.js';

//Задаем координаты "по умолчанию"
const COORDINATES_DEF = {
  lat: 35.68950,
  lng: 139.69171,
};
//создаем карту
const map = L.map('map-canvas')
.on('load', function (){
  activatePage();
  activateMapFilter();

})
.setView({
    lat: COORDINATES_DEF.lat,
    lng: COORDINATES_DEF.lng,
  }, 16);

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
  }, 16);
};

//слой для отрисовки неглавных меток
const markerGroup = L.layerGroup().addTo(map);

const deleteMarkers = () => {
  markerGroup.clearLayer();
};


const createMarker = (point) => {
  const {lat, lng} = point; console.log(point);
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

//const markerAddress = bookingForm.querySelector('address');
const addressElement = document.querySelector('#address');

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

export {deleteMarkers, createMarker, closePopup};

//на главный маркер повесить событие moveend, в кот. полю с адресом задавать значение координат. из Evt таргета брать getLatLng(), далее в инпут адрес шаблонной строкой сделать адрес.
