let user = "John Doe";
console.log(user);
console.log('----------------');

const student = "Maxim";
console.log(student);
console.log('----------------');

user = student; // now the value "user" = "Мaxim"
console.log(user);
console.log('----------------');

let test = 1;
test++;
test += '1'; // now the value "test" = 21
console.log(test);
console.log('----------------');

test -= 1; // now the value "test" = 20
console.log(test);
console.log('-----------------');

test = !test; //now the value "test" = false
console.log(test);
console.log('--------------');

const prim = {
  mas: [2, 3, 5, 8],
};

let result = 1;

for (let i = 0; i < prim.mas.length; i++) {
  result = result * prim.mas[i];
}
console.log('произведение элементов массива равно ' + [result]);
console.log('----------------');

const prim2 = {
  mas: [2, 5, 8, 15, 0, 6, 20, 3]
};

for (let i = 0; i < prim2.mas.length; i++) {
  if (prim2.mas[i] > 5 & prim2.mas[i] < 10) {
    console.log('элемент массива, соответствующий условию равен ' + prim2.mas[i]);
  }
}
console.log('----------------');

for (let i = 0; i < prim2.mas.length; i++) {
  let check = prim2.mas[i]%2;
  if (check === 0) {
    if (prim2.mas[i] === 0) {
      continue;
    }
    console.log('элемент массива, имеющий четное значение равен ' + prim2.mas[i]);
  }
}
