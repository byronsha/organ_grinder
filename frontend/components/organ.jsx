var React = require('react'),
    KeyStore = require('../stores/KeyStore.js'),
    KeyActions = require('../actions/KeyActions.js'),
    KeyListener = require('../util/KeyListener.js'),
    Tones = require('../constants/Tones.js'),
    Note = require('../util/Note.js'),
    Key = require('./key.jsx');


var Organ = React.createClass({
  getInitialState: function () {
    return { keys: KeyStore.all() };
  },

  _organChanged: function () {
    this.setState({ keys: KeyStore.all() });
  },

  componentDidMount: function(){
    KeyStore.addListener(this._organChanged);
  },

  componentWillUnmount: function(){
    KeyStore.removeListener(this._organChanged);
  },

  render: function () {
    var tones = Object.keys(Tones);
    var keys = this.state.keys;

    return(
      <div>Notes
        {
          tones.map(function(tone, idx) {
            var pressed = (keys.indexOf(tone) !== -1); //is tone in keys?

            return <Key key={idx} noteName={tone} pressed={pressed}/>;
          })
        }
      </div>
    );
  }
});



module.exports = Organ;
