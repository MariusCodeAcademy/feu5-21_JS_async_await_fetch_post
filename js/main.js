'use strict';
console.log('main.js file was loaded');

const url = '/db/nums.json';
console.log('pries fetch 1');

function getData() {
  const fetchResult = fetch(url)
    .then((resp) => resp.json())
    .then((dataInJs) => {
      console.log('getData ===', dataInJs);
      return dataInJs;
    })
    .catch(console.warn);
  return fetchResult;
}

console.log('po fetch 2');

const name1 = getData(); // is funkcijos kuri grazina promise, taip reiksmes negalim pasiimti.
console.log('name1 ===', name1); // promise, pending

// kaip pasiimti reikmes is promise?
