'use strict';

export function openAnswer(object) {
  const answer = object.nextElementSibling;
  answer.classList.add('open');
};

export function closeAnswer(object) {
  object.classList.remove('open');
};