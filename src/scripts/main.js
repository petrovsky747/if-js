const myDate = '1995-11-07';

const re = /(?<yyyy>\d+)-(?<mm>\d+)-(?<dd>\d+)/;

const convertDate = function (date) {
  return date.replace(re, `$<dd>.$<mm>.$<yyyy>`);
};

console.log(convertDate(myDate));

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const find = 'germany';

const re2 = new RegExp(`${find}`, 'i');

const search = function (str) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const obj = `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;
    if (obj.match(str) !== null) {
      result[result.length] = obj.match(str).input;
    }
  }
  return result;
};

console.log(search(re2));
