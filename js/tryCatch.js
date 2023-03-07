'use strict';
console.log('tryCatch.js file was loaded');

try {
  const appEl = document.getElementById('appa');

  if (!appEl) {
    // throw 'nera app elemento';
    throw new Error('nera app elemento');
  }

  appEl.textContent = 'Kazka irasiau';
} catch (error) {
  console.warn('ivyko klaida', error.message);
}
