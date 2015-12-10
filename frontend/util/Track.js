var KeyStore = require('../stores/KeyStore.js');

var Track = function (attributes) {
  this.name = attributes.name;
  this.roll = attributes.roll;
};

Track.prototype.startRecording = function (){
  this.roll = [];
  this.startTime = new Date();
};

Track.prototype.addNotes = function(notes){
  var newTime = new Date();

  var noteTime = (newTime - this.startTime);
  this.roll.push({"timeSlice": noteTime, "notes": notes});
};

Track.prototype.stopRecording = function(){
  this.addNotes([]);
};

// Track.prototype.play = function (roll) {
//   // body...
// };

module.exports = Track;
