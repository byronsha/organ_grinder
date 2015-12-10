var KeyActions = require('../actions/KeyActions.js');

var keyNotes = {
  81: "C₄",
  50: "C₄♯",
  87: "D₄",
  51: "D₄♯",
  69: "E₄",
  82: "F₄",
  53: "F₄♯",
  84: "G₄",
  54: "G₄♯",
  89: "A₄",
  55: "B₄♭",
  85: "B₄",
  73: "C₅",
  57: "C₅♯",
  79: "D₅",
  48: "D₅♯",
  80: "E₅",
  90: "F₅",
  83: "F₅♯",
  88: "G₅",
  68: "G₅♯",
  67: "A₅",
  70: "B₅♭",
  86: "B₅",
  66: "C₆",
  72: "C₆♯",
  78: "D₆",
  74: "D₆♯",
  77: "E₆"
};

$(document).on("keydown", function(e){
  if (e.keyCode <= 90 && e.keyCode >= 48 ) {
    KeyActions.press(keyNotes[e.keyCode]);
  }
});

$(document).on("keyup", function(e){
  if (e.keyCode <= 90 && e.keyCode >= 48 ) {
    KeyActions.release(keyNotes[e.keyCode]);
  }
});
