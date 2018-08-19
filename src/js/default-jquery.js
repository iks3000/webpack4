import $ from "jquery";

const app = (a, b) => {
  return a * b;
};

$(function() {
  $('#demo').text(app(6,7));
});