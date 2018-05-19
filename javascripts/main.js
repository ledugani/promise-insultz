const data = require('./data');
const events = require('./events');

$(document).ready(() => {
  data.initializer();
  events();
});
