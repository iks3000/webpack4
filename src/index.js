import jQuery from 'jquery';
import "./scss/style.scss"

const app = (a, b) => {
    return a * b;
};

console.log(app(6,7));

jQuery(function() {
    jQuery('#demo').text(app(6,7));
});