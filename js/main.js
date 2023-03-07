'use strict';
console.log('main.js file was loaded');

const urlBase = '/db/nums.json';
console.log('pries fetch 1');

function getData(url) {
  const fetchResult = fetch(url)
    .then((resp) => resp.json())
    .then((dataInJs) => {
      // console.log('getData ===', dataInJs);
      return dataInJs;
    })
    .catch(console.warn);
  return fetchResult;
}

console.log('po fetch 2');

const name1 = getData(urlBase); // is funkcijos kuri grazina promise, taip reiksmes negalim pasiimti.
console.log('name1 ===', name1); // promise, pending

// kaip pasiimti reikmes is promise?
getData(urlBase).then((data) => {
  const name2 = data.name;
  console.log('name2 ===', name2); // promise, pending
});

// tikslas gauti duomenis is nums.json ir is colors.json ir tik tada atspausdinti.
getData('/db/nums.json')
  .then((numsData) => {
    console.log('numsData ===', numsData);
    return getData('/db/colors.json');
  })
  .then((colorsData) => {
    console.log('colorsData ===', colorsData);
  });

async function getTwoDatas() {
  const numsData = await getData('/db/nums.json');
  const colorsData = await getData('/db/colors.json');
  console.log({ numsData, colorsData });
}
getTwoDatas();
