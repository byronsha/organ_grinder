var KeyStore = require('../stores/KeyStore.js');
var KeyActions = require('../actions/KeyActions.js');

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

Track.prototype.play = function() {
  console.log(this.roll);
  if (this.interval) {
    return;
  }

  var playbackStartTime = Date.now();
  var currentNote = 0;
  var delta;

  this.interval = setInterval(function(){
    if (currentNote < this.roll.length){
      delta = Date.now() - playbackStartTime;

      if (delta >= this.roll[currentNote].timeSlice){
        var notes = this.roll[currentNote].notes || [];
        KeyActions.groupUpdate(notes);
        currentNote++;
      }
    } else {
      clearInterval(this.interval);
      delete this.interval;
    }
  }.bind(this), 1);
};

module.exports = Track;
