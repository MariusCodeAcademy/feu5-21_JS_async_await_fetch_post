'use strict';
console.log('async.js file was loaded');

// asyc ir await yra budas patogiau dirbti su asinchroniniu kodu

function getData(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((dataInJs) => {
      console.log('getData ===', dataInJs);
    })
    .catch((err) => {
      console.warn(err);
      // alert('ivyko klaida, bandykite veliau');
    });
}

async function getDataAsync(url) {
  const resp = await fetch(url);
  const dataInJs = await resp.json();
  console.log('getData ===', dataInJs);
}

getData('/db2/nums.json');
// getDataAsync('/db2/nums.json');
