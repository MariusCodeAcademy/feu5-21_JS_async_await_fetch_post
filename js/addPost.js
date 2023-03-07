'use strict';
console.log('addPost.js file was loaded');

const addPostBtn = document.getElementById('addPost');

// add post
const url = 'https://dummyjson.com/posts/add';

const newPostData = {
  title: 'This is new Post from me',
  body: 'This is new Posts body from me',
  userId: 1,
};

// mygtuko paspaudimu issiunciam post su fetch
addPostBtn.addEventListener('click', () => {
  sendFetchAsync(newPostData);
});

async function sendFetchAsync(newPost) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    });
    console.log('response ===', response);

    // pasitikrinti ar pavyko sukurti post
    // nepavyko sukurti jei response.status nelygus 200
    // arba response.ok yra false
    if (response.status !== 200) {
      // klaida sukurti nepavyko
      console.log('klaida sukurti nepavyko');
      return;
    }

    const ats = await response.json();
    console.log('ats ===', ats);
    if (ats.message === 'User id is required') {
      // klaida
      console.log('klaida');
    }
    if (ats.id) {
      // pavyko
      console.log('pavyko post sukurtas');
    }
  } catch (error) {
    console.warn(error);
  }
}
// ir aprasom sekmes ir nesekmes atvejus
