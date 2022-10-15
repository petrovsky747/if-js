export function sum(x) {
  return function subSum(y) {
    return x + y;
  };
}

export function getColor(arr) {
  let count = 0;
  return function () {
    count++;
    if (count > arr.length) {
      count = 1;
    }
    return arr[count - 1];
  };
}
