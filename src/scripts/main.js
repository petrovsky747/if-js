const adultMinus = document.getElementById('adult_minus');
const adultPlus = document.getElementById('adult_plus');
const adultCount = document.getElementById('adult_count');
let adultAmount = 2;
const adultFormText = document.querySelector(
  '.topsection-guests-desktop__adult',
);

const childMinus = document.getElementById('child_minus');
const childPlus = document.getElementById('child_plus');
const childCount = document.getElementById('child_count');
let childAmount = 0;
const childFormText = document.querySelector(
  '.topsection-guests-desktop__child',
);

const roomMinus = document.getElementById('room_minus');
const roomPlus = document.getElementById('room_plus');
const roomCount = document.getElementById('room_count');
let roomAmount = 1;
const roomFormText = document.querySelector('.topsection-guests-desktop__room');

const guestsBlock = document.querySelector('.topsection-guests-desktop');
const filterBlock = document.querySelector('.topsection-filter');
const selectBlock = document.querySelector('.age-select');

document.addEventListener('click', (e) => {
  if (
    !e.target.matches(
      '.topsection-guests-desktop, .topsection-guests-desktop *, .topsection-filter, .topsection-filter *',
    )
  ) {
    filterBlock.style.display = 'none';
    guestsBlock.classList.remove('guests_active');
  }
});

guestsBlock.addEventListener('click', () => {
  if (filterBlock.style.display === 'none' || filterBlock.style.display === '')
    filterBlock.style.display = 'flex';
  guestsBlock.classList.add('guests_active');
});

adultPlus.addEventListener('click', (event) => {
  event.preventDefault();
  adultMinus.classList.add('_button-active');
  if (adultAmount >= 29) {
    event.target.classList.remove('_button-active');
    adultAmount = 30;
  } else adultAmount++;
  adultCount.textContent = adultAmount.toString();
  adultFormText.textContent = `${adultAmount.toString()} Adults – `;
});

adultMinus.addEventListener('click', (event) => {
  event.preventDefault();
  if (adultAmount <= 2) {
    adultAmount = 1;
    adultMinus.classList.remove('_button-active');
  } else adultAmount--;
  if (adultAmount <= 30) {
    adultPlus.classList.add('_button-active');
  }
  adultCount.textContent = adultAmount.toString();
  adultFormText.textContent = `${adultAmount.toString()} Adults – `;
});

childPlus.addEventListener('click', (event) => {
  event.preventDefault();
  if (childAmount === 9) {
    event.target.classList.remove('_button-active');
    childAmount++;
    selectBlock.insertAdjacentHTML('beforebegin', selectBlock.outerHTML);
  } else if (childAmount === 0) {
    childAmount++;
    selectBlock.parentElement.style.display = 'flex';
    childMinus.classList.add('_button-active');
  } else if (childAmount > 9) {
    childAmount = 10;
  } else {
    childAmount++;
    selectBlock.insertAdjacentHTML('beforebegin', selectBlock.outerHTML);
  }
  childCount.textContent = childAmount.toString();
  childFormText.textContent = `${childAmount.toString()} Children – `;
});

childMinus.addEventListener('click', (event) => {
  event.preventDefault();
  childPlus.classList.add('_button-active');
  if (childAmount === 1) {
    childAmount = 0;
    childMinus.classList.remove('_button-active');
  }
  if (childAmount === 0) {
    selectBlock.parentElement.style.display = 'none';
  } else {
    childAmount--;
    document.querySelector('.age-select').remove();
  }
  childCount.textContent = childAmount.toString();
  childFormText.textContent = `${childAmount.toString()} Children – `;
});

roomPlus.addEventListener('click', (event) => {
  event.preventDefault();
  roomMinus.classList.add('_button-active');
  if (roomAmount >= 29) {
    event.target.classList.remove('_button-active');
    roomAmount = 30;
  } else roomAmount++;
  roomCount.textContent = roomAmount.toString();
  roomFormText.textContent = `${roomAmount.toString()} Rooms`;
});

roomMinus.addEventListener('click', (event) => {
  event.preventDefault();
  if (roomAmount <= 2) {
    roomAmount = 1;
    roomMinus.classList.remove('_button-active');
  } else roomAmount--;
  if (roomAmount <= 30) {
    roomPlus.classList.add('_button-active');
  }
  roomCount.textContent = roomAmount.toString();
  roomFormText.textContent = `${roomAmount.toString()} Rooms`;
});

const topsectionForm = document.querySelector('.topsection-form');

const generateMarkup = (data) => {
  const markupArr = [];
  data.forEach((el, index) => {
    markupArr[index] = `<div id="${el.id}" class="carousel-cell">
      <div>
        <img class="homes-col__image" src="${el.imageUrl}" alt="Apartment photo">
        <p class="link homes-col__link">${el.name}</p>
          <p class="subtitle homes-col__subtitle">${el.city}, ${el.country}</p>
      </div>
    </div>`;
  });
  return markupArr.join('');
};

topsectionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchKey = document.getElementById('city').value;
  fetch(`https://if-student-api.onrender.com/api/hotels?search=${searchKey}`, {
    method: 'GET',
    headers: {
      'content-type': 'application-json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const availableSection = `
<section class="available">
  <div class="container available-container">
    <h2 class="title available-title">Available hotels</h2>
    <div class="main-carousel">
      ${generateMarkup(data)}
    </div>
  </div>
</section>
`;
      const currentSection = document.querySelector('.available');

      if (currentSection !== null) {
        currentSection.outerHTML = availableSection;
      } else {
        const advantagesSection = document.querySelector('.advantages');
        advantagesSection.insertAdjacentHTML('beforebegin', availableSection);
      }

      const elem = document.querySelector('.main-carousel');
      // eslint-disable-next-line no-undef
      const flkty = new Flickity(elem, {
        // options
        cellAlign: 'center',
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
      if (data.length <= 3) {
        flkty.options.cellAlign = 'center';
      }
      flkty.next();
      flkty.select(4);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

function addSlider() {
  const elem = document.querySelector('.main-carousel');
  // eslint-disable-next-line no-undef
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
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

const addData = (data) => {
  const homesSection = `
<section class="homes">
  <div class="container homes-container">
    <h2 class="title homes-title">Homes guests loves</h2>
    <div class="main-carousel">
      ${generateMarkup(data)}
    </div>
  </div>
</section>
`;

  const destinationsSection = document.querySelector('.destinations');
  destinationsSection.insertAdjacentHTML('beforebegin', homesSection);

  addSlider();
};

const dataKeys = JSON.parse(sessionStorage.getItem('data'));
if (dataKeys !== null) {
  console.log(dataKeys);
  addData(dataKeys);
} else {
  fetch('https://if-student-api.onrender.com/api/hotels/popular', {
    method: 'GET',
    headers: {
      'content-type': 'application-json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      sessionStorage.setItem('data', JSON.stringify(data));
      console.log(data);
      addData(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// fetch('https://if-student-api.onrender.com/api/hotels/popular', {
//   method: 'GET',
//   headers: {
//     'content-type': 'application-json',
//   },
// })
//   .then((response) => {
//     debugger;
//     if (!response.ok) {
//       throw new Error(`${response.status} - ${response.statusText}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     debugger;
//     sessionStorage.setItem('data', JSON.stringify(data));
//     const homesSection = `
// <section class="homes">
//   <div class="container homes-container">
//     <h2 class="title homes-title">Homes guests loves</h2>
//     <div class="main-carousel">
//       ${addContent(data)}
//     </div>
//   </div>
// </section>
// `;
//
//     const destinationsSection = document.querySelector('.destinations');
//     destinationsSection.insertAdjacentHTML('beforebegin', homesSection);
//
//     const elem = document.querySelector('.main-carousel');
//     // eslint-disable-next-line no-undef
//     const flkty = new Flickity(elem, {
//       // options
//       cellAlign: 'left',
//       contain: true,
//       draggable: false,
//       groupCells: true,
//       pageDots: false,
//       percentPosition: false,
//       arrowShape: {
//         x0: 35,
//         x1: 60,
//         y1: 35,
//         x2: 70,
//         y2: 35,
//         x3: 45,
//       },
//     });
//     flkty.next();
//     flkty.select(4);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
