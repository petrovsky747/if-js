export default function bubbleSort(arr) {
  const dataCopy = JSON.parse(JSON.stringify(arr));
  let swapped;

  do {
    swapped = false;

    dataCopy.forEach((item, index) => {
      if (index < dataCopy.length - 1) {
        if (item['name'] > dataCopy[index + 1]['name']) {
          const temp = item;
          dataCopy[index] = dataCopy[index + 1];
          dataCopy[index + 1] = temp;
          swapped = true;
        }
      }
    });
  } while (swapped);
  return dataCopy;
}
