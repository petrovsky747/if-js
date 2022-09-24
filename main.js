(() => {
  const palindrome = function (word) {
    let result;
    let letternum = 0;

    for (let i = 0; i < word.length / 2; i++) {
      letternum += 1;
      result = word[i] === word[word.length - letternum];
      if (result === false) {
        break;
      }
    }
    return result;
  };

  const myword = 'шалаш';
  console.log(palindrome(myword));

  const min = function (a, b) {
    return a < b ? `${a}` : `${b}`;
  };

  console.log(min(15, 5));

  const max = function (a, y) {
    return a > y ? `${a}` : `${y}`;
  };

  console.log(max(15, 256));

  const mas = [2, 50, 8, 100, 0, 6, 20, 3, 30, 58];

  const replaceZero = function (m) {
    for (let i = 0; i < m.length; i++) {
      m[i] = String(m[i]);
      for (let j = 0; j < m[i].length; j++) {
        if (m[i].indexOf('0') !== -1) {
          m[i] = m[i].replace('0', 'zero');
        }
      }
    }
    for (let k = 0; k < m.length; k++) {
      if (m[k].indexOf('zero') === -1) {
        m[k] = Number(m[k]);
      }
    }
    return m;
  };

  console.log(replaceZero(mas));
})();
