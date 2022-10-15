import { sum, getColor } from '../scripts/utils.js';

// eslint-disable-next-line no-undef
test('Addition function test', () => {
  const k = 1;
  const j = 2;
  // eslint-disable-next-line no-undef
  expect(sum(k)(j)).toBe(3);
});

const arrayTest = [1, 2, 3, 4, 5];

const swColor1 = getColor(arrayTest);
const swColor2 = getColor(arrayTest);

let k;
let j;

for (let i = 0; i < 6; i++) {
  k = swColor1();
  j = swColor2();
}

const check = k === j;

// eslint-disable-next-line no-undef
test('Checking for equality of values returned by functions', () => {
  // eslint-disable-next-line no-undef
  expect(check).toBe(true);
});
