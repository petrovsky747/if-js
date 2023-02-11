import addSlider from './slider.js';

export const generateHotelCards = (data) => {
  const markupArr = [];
  data.forEach((el, index) => {
    markupArr[index] = `<div id="${el.id}" class="carousel-cell">
      <div>
        <img class="hotels-col__image" src="${el.imageUrl}" alt="Apartment photo">
        <p class="link hotels-col__link">${el.name}</p>
          <p class="subtitle hotels-col__subtitle">${el.city}, ${el.country}</p>
      </div>
    </div>`;
  });
  return markupArr.join('');
};

export const addData = (data) => {
  const homesSection = `
<section class="homes">
  <div class="container homes-container">
    <h2 class="title homes-title">Homes guests loves</h2>
    <div class="main-carousel">
      ${generateHotelCards(data)}
    </div>
  </div>
</section>
`;

  const destinationsSection = document.querySelector('.destinations');
  destinationsSection.insertAdjacentHTML('beforebegin', homesSection);

  addSlider();
};
