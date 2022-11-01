const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};

const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

function deepEqual(object1, object2) {
  const checkObject =
    typeof object1 === 'object' && typeof object2 === 'object';
  const checkNotNull = object1 !== null && object2 !== null;

  if (checkObject && checkNotNull) {
    for (const prop in object1) {
      if (!(prop in object2)) return false;
      if (
        typeof object1[prop] === 'object' &&
        typeof object2[prop] === 'object'
      ) {
        const result = deepEqual(object1[prop], object2[prop]);
        if (!result) return false;
      } else {
        if (object1[prop] !== object2[prop]) return false;
      }
    }
    return true;
  } else {
    return object1 === object2;
  }
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual({ a: 'a', b: { a: 'a' } }, { a: 'a', b: { b: 'b' } }));
