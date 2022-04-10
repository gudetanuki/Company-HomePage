'use strict';
const question = document.querySelectorAll('.question-list-q');
const answer = document.querySelectorAll('.question-list-a');

const accordionQuestion = question.forEach((ele, index) => {
  ele.addEventListener('click', () => {
    answer[index].classList.add('open');
  });
});

const accordionAnswer = answer.forEach((ele, index) => {
  ele.addEventListener('click', () => {
    answer[index].classList.remove('open');
  });
});
export {accordionQuestion, accordionAnswer}
