import jQuery from 'jquery';
// import bootstrap from 'bootstrap';
import "./scss/style.scss"

const app = (a, b) => {
    return a + b;
};

console.log(app(4,5));

jQuery(function() {
    jQuery('#demo').text(app(4,5));
});