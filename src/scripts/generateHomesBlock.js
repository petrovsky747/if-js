import { addData, bubbleSort } from './functions.js';

export default function generateHomes() {
  const dataKeys = JSON.parse(sessionStorage.getItem('data'));
  if (dataKeys !== null) {
    if (
      Object.keys(dataKeys[0]).toString() === 'id,name,city,country,imageUrl'
    ) {
      addData(dataKeys);
    }
  } else {
    fetch('https://if-student-api.onrender.com/api/hotels/popular', {
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
        const sortedData = bubbleSort(data);
        sessionStorage.setItem('data', JSON.stringify(sortedData));
        addData(sortedData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
