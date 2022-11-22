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

const advantagesSection = document.querySelector('.destinations');
const homesSection = document.createElement('section');
homesSection.className = 'homes';
advantagesSection.insertAdjacentElement('beforebegin', homesSection);

const homesContainer = document.createElement('div');
homesContainer.classList.add('container', 'homes-container');
const homesTitle = document.createElement('h2');
homesTitle.classList.add('title', 'homes-title');
homesTitle.textContent = 'Homes guests loves';
const homesImages = document.createElement('div');
homesImages.classList.add('row', 'homes-row', 'homes-images');
const homesLinks = document.createElement('div');
homesLinks.classList.add('row', 'homes-row', 'homes-links');
homesSection.appendChild(homesContainer);
homesContainer.appendChild(homesTitle);
homesContainer.appendChild(homesImages);
homesContainer.appendChild(homesLinks);

data.forEach((el, index) => {
  const cssLi = ['hotel', 'apartment', 'villa', 'hostel'];
  const homesMediaQ = document.createElement('div');
  homesMediaQ.setAttribute('id', `${el.id}`);
  homesMediaQ.classList.add('col-lg-3', 'col-md-6', 'col-sm-3');
  const homesCol = document.createElement('div');
  homesCol.classList.add('homes-col', cssLi[index]);
  homesMediaQ.appendChild(homesCol);
  const homesImage = document.createElement('img');
  homesImage.setAttribute('src', `${el.imageUrl}`);
  homesImage.className = 'homes-col__image';
  homesCol.appendChild(homesImage);
  homesImages.appendChild(homesMediaQ);
  const homesMediaQlink = document.createElement('div');
  homesMediaQlink.classList.add('col-lg-3', 'col-md-6', 'col-sm-3');
  const homesColLink = document.createElement('div');
  homesColLink.classList.add('homes-col', cssLi[index]);
  homesMediaQlink.appendChild(homesColLink);
  const homesLink = document.createElement('p');
  homesLink.classList.add('link', 'homes-col__link');
  homesLink.textContent = `${el.name}`;
  const homesSubtitle = document.createElement('p');
  homesSubtitle.classList.add('subtitle', 'homes-col__subtitle');
  homesSubtitle.textContent = `${el.city}, ${el.country}`;
  homesColLink.appendChild(homesLink);
  homesColLink.appendChild(homesSubtitle);
  homesLinks.appendChild(homesMediaQlink);
});

const homesArrow = document.createElement('div');
homesArrow.className = 'homes-arrow';
const arrowSvg = document.createElement('svg');
arrowSvg.className = 'arrow_svg';
const useArrow = document.createElement('use');
useArrow.setAttribute('href', '#arrow');
homesImages.appendChild(homesArrow);
homesArrow.appendChild(arrowSvg);
arrowSvg.appendChild(useArrow);
