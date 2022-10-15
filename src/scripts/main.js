import { sum, getColor } from './utils.js';

console.log(sum(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const switchColor1 = getColor(colors);
const switchColor2 = getColor(colors);
const switchColor3 = getColor(colors);

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

text1.addEventListener('click', (event) => {
  event.target.style.color = switchColor1();
});

text2.addEventListener('click', (event) => {
  event.target.style.color = switchColor2();
});

text3.addEventListener('click', (event) => {
  event.target.style.color = switchColor3();
});
