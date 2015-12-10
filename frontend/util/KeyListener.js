var KeyActions = require('../actions/KeyActions.js');

var keyNotes = {
  49: "A",
  50: "B",
  51: "C",
  52: "D",
  53: "E",
  54: "F",
  55: "G"
};

$(document).on("keydown", function(e){

  if (e.keyCode < 56 && e.keyCode > 48 ) {
    KeyActions.press(keyNotes[e.keyCode]);
  }
});

$(document).on("keyup", function(e){
  if (e.keyCode < 56 && e.keyCode > 48 ) {
    KeyActions.release(keyNotes[e.keyCode]);
  }
});
