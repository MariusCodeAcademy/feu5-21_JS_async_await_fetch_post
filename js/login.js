'use strict';
console.log('login.js file was loaded');

const els = {
  formEl: document.forms[0],
  emailEl: document.getElementById('email'),
  passwordEl: document.getElementById('password'),
  errorEl: document.getElementById('errorMsg'),
};

// event listener
els.formEl.addEventListener('submit', handleLogin);
// functions

function handleLogin(e) {
  // stabdom psl nuo perkrovimo
  e.preventDefault();
  console.log('forma pateikta');
  // surinkti reikmes i objekta
  const userLoginiDetails = {
    username: els.emailEl.value.trim(),
    password: els.passwordEl.value.trim(),
  };
  console.log('userLoginiDetails ===', userLoginiDetails);
  // validacija TODO:

  // siusti objekta su fetch
  sendFetchPost(userLoginiDetails);
}

// duomenu issiuntimas is formos i serveri ir atsakymo gavimas
function sendFetchPost({ username, password }) {
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((resp) => resp.json())
    .then((ats) => {
      console.log(ats);
      if (ats.message === 'Invalid credentials') {
        console.log('ivyko klaida');
        showError('check your email or password');
      }
      if (ats.token) {
        console.log('login sekmingas');
        navigateTo('/index.html');
      }
    })
    .catch(console.warn);
}

function navigateTo(whereTo) {
  window.location.href = whereTo;
}

function showError(msg) {
  els.errorEl.textContent = msg;
  els.errorEl.style.display = 'block';
}
