const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
];

const addImages = () => {
  const markupArr = [];
  data.forEach((el, index) => {
    const imgAlt = ['hotel', 'apartment', 'villa', 'hostel'];
    markupArr[index] = `<div id="${el.id}" class="col-lg-3 col-md-6 col-sm-3">
      <div class="homes-col">
        <img class="homes-col__image" src="${el.imageUrl}" alt="${imgAlt[index]}">
      </div>
    </div>`;
  });
  return markupArr.join('');
};

const addLinks = () => {
  const markupArr = [];
  data.forEach((el, index) => {
    markupArr[index] = `
      <div class="col-lg-3 col-md-6 col-sm-3">
        <div class="homes-col">
          <p class="link homes-col__link">${el.name}</p>
          <p class="subtitle homes-col__subtitle">${el.city}, ${el.country}</p>
        </div>
      </div>`;
  });
  return markupArr.join('');
};

const homesSection = `
<section class="homes">
  <div class="container homes-container">
    <h2 class="title homes-title">Homes guests loves</h2>
    <div class="row homes-row homes-images">
      ${addImages()}
      <div class="homes-arrow">
        <svg class="arrow_svg">
          <use href="#arrow"/>
        </svg>
      </div>
    </div>
    <div class="row homes-row homes-links">
      ${addLinks()}
    </div>
  </div>
</section>
`;

const destinationsSection = document.querySelector('.destinations');
destinationsSection.insertAdjacentHTML('beforebegin', homesSection);
