import { addSlider, generateHotelCards } from './functions.js';
import { adultAmount, childAmount, roomAmount } from './searchFilter.js';

export default function search() {
  const topsectionForm = document.querySelector('.topsection-form');

  topsectionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const urlSearch = new URL('https://if-student-api.onrender.com/api/hotels');
    const searchKey = document.getElementById('city').value;
    const params = new URLSearchParams({
      search: searchKey,
      adults: adultAmount,
      rooms: roomAmount,
    });

    if (childAmount > 0) {
      const allChildrenSelects = document.querySelectorAll('.age-select');
      const years = [];
      allChildrenSelects.forEach((select) => {
        years.push(select.selectedIndex);
      });
      params.set('children', years.join(','));
    }

    fetch(`${urlSearch.href}?${decodeURIComponent(params.toString())}`, {
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
      ${generateHotelCards(data)}
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

        addSlider('center');
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
}
