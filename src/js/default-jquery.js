import $ from "jquery";

const app = (a,b) => {
  return a * b;
};

'use strict';

$(function() {

  var timer = null,
      interval = 1000,
      counter = app(6,7),
      number = $('#demo');

  number.text(counter);

  $('.google').on('click', startTimer);
  $('.apple').on('click', stopTimer);
  $('.webpack').on('click', resetTimer);

  function startTimer() {
    if (timer !== null) return;
    timer = setInterval(function() {
      counter++;
      number.text(counter);

      // if (counter < 0) {
      //   stopTimer();
      //   number.text("time's Up");
      // }
    }, interval);

  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function resetTimer() {
    stopTimer();
    counter = app(6,7);
    number.text(counter);
  }

startTimer();  // auto start


});