function sum(x) {
  return function subSum (y) {
    return x+y;
  }
}

console. log(sum(5)(2));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];


text1.addEventListener('click', (event) => {
  event.target.style.color = switchColor1();
})

text2.addEventListener('click', (event) => {
  event.target.style.color = switchColor2();
})

text3.addEventListener('click', (event) => {
  event.target.style.color = switchColor3();
})

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

let switchColor1 = getColor(colors);
let switchColor2 = getColor(colors);
let switchColor3 = getColor(colors);
