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
    var keyReturn,
        keyStyle = { float: "left" };


    if (this.props.pressed) {
      keyStyle["fontStyle"] = "bold";
      keyStyle["fontSize"] = "40px";

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
