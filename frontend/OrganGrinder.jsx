var ReactDOM = require('react-dom');
var React = require('react');
var Organ = require('./components/organ.jsx');

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#root');
  ReactDOM.render(<Organ/>, root);
});
