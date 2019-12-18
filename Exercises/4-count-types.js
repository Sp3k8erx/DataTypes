'use strict';


const countTypesInArray = arr => {
  const collect = {};
  for (const value of arr) {
    const type = typeof value;
    collect[type] = ++collect[type] || 1;
  }
  return collect;
};


module.exports = { countTypesInArray };
