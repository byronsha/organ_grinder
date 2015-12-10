var React = require('react'),
    KeyStore = require('../stores/KeyStore.js'),
    KeyActions = require('../actions/KeyActions.js'),
    KeyListener = require('../util/KeyListener.js'),
    Tones = require('../constants/Tones.js'),
    Note = require('../util/Note.js');

var Key = React.createClass({
  componentWillMount: function(){
    this.note = new Note(Tones[this.props.noteName]);
  },

  render: function(){
    var keyStyle = {
      float: "left",
      padding: "1px",
      width: "32px",
      outline: "1px solid",
      textAlign: "center"
    };

    if (this.props.noteName.length === 2) {
      keyStyle["paddingTop"] = "140px";
    } else {
      keyStyle["paddingTop"] = "80px";
      keyStyle["background"] = "black";
      keyStyle["color"] = "white";
    }

    if (this.props.pressed) {
      keyStyle["fontStyle"] = "bold";
      keyStyle["background"] = "red";
      this.note.start();
    } else {
      this.note.stop();
    }

    return (
      <div>
        <span style={keyStyle}>{this.props.noteName}</span>
      </div>
    );
  }
});

module.exports = Key;
