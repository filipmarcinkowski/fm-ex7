'use strict';

const btn = document.querySelector('.notation__btn');
const grades = document.querySelectorAll('.notation__rating-grade-box');
const ratingContainer = document.querySelector('.notation__container');
const summaryContainer = document.querySelector('.summary__container');
const insertHTML = document.querySelector('.summary__summary-box');

const notation = grades.forEach(function (note, i) {
  note.addEventListener('click', function () {
    const html = `
    <p class="summary__summary-desc">You selected ${i + 1}
     out of ${grades.length}</p>`;

    grades.forEach(function (el) {
      el.classList.remove('orange');
    });
    note.classList.add('orange');

    insertHTML.insertAdjacentHTML('beforeend', html);
  });
});

btn.addEventListener('click', function () {
  const check = document.querySelector('.notation__rating-grade-box.orange');
  if (check) {
    ratingContainer.classList.add('hidden');
    summaryContainer.classList.remove('hidden');
  }
});
