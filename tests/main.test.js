function sum(x) {
  return function subSum (y) {
    return x+y;
  }
}

test('When adding new valid product, get successful confirmation', () => {
  const k = 1;
  const j = 2;
  expect(sum(k)(j)).toBe(3);
});

const arrayTest = [1, 2, 3, 4, 5];

function getColor (arr) {
  let count = 0;
  return function () {
    count++;
    if (count > arr.length)
    {
      count = 1;
    }
    return arr[count - 1];
  }
}

let switchColor1 = getColor(arrayTest);
let switchColor2 = getColor(arrayTest);

for (let i = 0; i < 6; i++) {
  var k = switchColor1();
  var j = switchColor2();
}

let check = k === j;

test('When adding new valid product, get successful confirmation', () => {
  expect(check).toBe(true);
});



