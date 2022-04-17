const mapFilters = document.querySelector('.map__filters');

const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');

const minPriceMap = {
  'low': [0, 10000],
  'middle': [10000, 50000],
  'high': [50000, 100000]
};

const typeFilter = (ad) => {
  const typeFilterValue = housingType.value;
  if (typeFilterValue === 'any') {
    return true;
  }
  return typeFilterValue === ad.offer.type;
};

const priceFilter = (ad) => {
  const priceFilterValue = housingPrice.value;
  if (priceFilterValue === 'any') {
    return true;
  }
  const minPrice = minPriceMap[housingPrice.value][0];
  const maxPrice = minPriceMap[housingPrice.value][1];

  return ad.offer.price >= minPrice && ad.offer.price <= maxPrice;
};

const roomsFilter = (ad) => {
  const roomsFilterValue = housingRooms.value;
  if (roomsFilterValue === 'any') {
    return true;
  }
  return Number(roomsFilterValue) === ad.offer.rooms;
};

const guestsFilter = (ad) => {
  const guestsFilterValue = housingGuests.value;
  if (guestsFilterValue === 'any') {
    return true;
  }
  return Number(guestsFilterValue) === ad.offer.guests;
};


const featuresFilter = (ad) => {

  const featuresChecked = Array.from(mapFilters.querySelectorAll('.map__checkbox:checked'), (inp) => inp.value);

  if (ad.offer.features)  {
    if (featuresChecked.every((feature) => ad.offer.features.includes(feature))) {
      return ad;
    }
    return false;
  }
};

const getNewArrayOfAds = (ads) => {
  const newArrayOfAds = [];
  for (let i = 0; i < ads.length; i++) {
    if (typeFilter(ads[i]) && priceFilter(ads[i]) && roomsFilter(ads[i]) &&
    guestsFilter(ads[i]) && featuresFilter(ads[i])) {
      newArrayOfAds.push(ads[i]);
    }
    if (newArrayOfAds.length === 10) {
      break;
    }
  }
  return newArrayOfAds;
};

const onFilterChange = (cb, filter) => {
  filter.addEventListener('change', () => {
    cb();
  }
  );
};


export {getNewArrayOfAds, onFilterChange};
