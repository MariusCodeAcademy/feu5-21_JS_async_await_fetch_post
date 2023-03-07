'use strict';
console.log('register.js file was loaded');

const formEl = document.forms[0];
const els = {
  form: formEl,
  email: formEl.elements.email,
  password: formEl.elements.password,
  repeatPassword: formEl.elements.repeatPassword,
  feedbackEl: document.getElementById('feedback'),
};
console.log('els ===', els);

// event listeners
formEl.addEventListener('submit', handleRegisterSubmit);

// functions
/**
 * function to handle register logic
 * @param {SubmitEvent} e
 */
function handleRegisterSubmit(e) {
  e.preventDefault();
  // naujas objektas is inputs

  const allFormValues = {
    email: els.email.value.trim(),
    password: els.password.value.trim(),
    repeatPassword: els.repeatPassword.value.trim(),
  };

  console.log('allFormValues ===', allFormValues);

  // visi laukai privalomi
  if (isThereEmptyValues(allFormValues)) {
    showFeedback('error', 'Visi laukai privalomi');
    return;
  }

  // 5. pateikimo metu patikrinti ar sutampa slaptazodziai.
  const passMatch = doValuesMatch(allFormValues.password, allFormValues.repeatPassword);

  if (!passMatch) {
    // nesutampa slaptazodizai
    showFeedback('error', 'nesutampa slaptazodziai');
    return;
  }

  // tusciu nera, ir slaptazodiziai sutampa
  console.log('tusciu nera, ir slaptazodiziai sutampa');

  sendRegisterFetch({ email: allFormValues.email, password: allFormValues.password });
}

function doValuesMatch(val1, val2) {
  return val1 === val2;
}

function showFeedback(kind, msg) {
  els.feedbackEl.textContent = msg;
  els.feedbackEl.classList.add(kind);
}

function isThereEmptyValues(objToCheck) {
  console.log('objToCheck ===', objToCheck);
  const valuesFromObjArr = Object.values(objToCheck);
  console.log('valuesFromObjArr ===', valuesFromObjArr);
  // ar valuesFromObjArr yra tusciu string verciu ?
  const isThereEmpties = valuesFromObjArr.includes('');
  console.log('isThereEmpties ===', isThereEmpties);
  return isThereEmpties;
}

// isvalti feedback atitinkamoje vietoje

function sendRegisterFetch(obj) {}
