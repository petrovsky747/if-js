const adultMinus = document.getElementById('adult_minus');
const adultPlus = document.getElementById('adult_plus');
const adultCount = document.getElementById('adult_count');
let adultAmount = 0;
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
let roomAmount = 0;
const roomFormText = document.querySelector('.topsection-guests-desktop__room');

const guestsBlock = document.querySelector('.topsection-guests-desktop');
const filterBlock = document.querySelector('.topsection-filter');
const selectBlock = document.querySelector('.age-select');

guestsBlock.addEventListener('click', () => {
  if (filterBlock.style.display === 'none') {
    filterBlock.style.display = 'flex';
    guestsBlock.classList.add('guests_active');
  } else {
    filterBlock.style.display = 'none';
    guestsBlock.classList.remove('guests_active');
  }
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
  if (adultAmount <= 1) {
    adultAmount = 0;
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
