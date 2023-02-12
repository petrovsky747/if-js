export function addSlider(cellAlign) {
  const elem = document.querySelector('.main-carousel');
  // eslint-disable-next-line no-undef
  const flkty = new Flickity(elem, {
    // options
    cellAlign: cellAlign,
    contain: true,
    draggable: false,
    groupCells: true,
    pageDots: false,
    percentPosition: false,
    arrowShape: {
      x0: 35,
      x1: 60,
      y1: 35,
      x2: 70,
      y2: 35,
      x3: 45,
    },
  });
  flkty.next();
  flkty.select(4);
}

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

  addSlider('left');
};

export function bubbleSort(arr) {
  const dataCopy = JSON.parse(JSON.stringify(arr));
  let swapped;

  do {
    swapped = false;

    dataCopy.forEach((item, index) => {
      if (index < dataCopy.length - 1) {
        if (item['name'] > dataCopy[index + 1]['name']) {
          const temp = item;
          dataCopy[index] = dataCopy[index + 1];
          dataCopy[index + 1] = temp;
          swapped = true;
        }
      }
    });
  } while (swapped);
  return dataCopy;
}
