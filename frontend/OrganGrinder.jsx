var ReactDOM = require('react-dom');
var React = require('react');
var Organ = require('./components/organ.jsx');
var Recorder = require('./components/recorder.jsx');

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#root');
  ReactDOM.render(
    <div>
      <Organ/>
      <Recorder/>
    </div>,
  root);
});
