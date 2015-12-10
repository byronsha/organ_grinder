var React = require('react'),
    KeyStore = require('../stores/KeyStore.js'),
    Track = require('../util/Track.js');

var Recorder = React.createClass({
  getInitialState: function(){
    return { isRecording: false, track: new Track({"name": "New Track", "roll": []})};
  },

  _recorderChanged: function () {
    if (this.state.isRecording){
      this.state.track.addNotes(KeyStore.all());
    };
    console.log(this.state.track.roll);
  },

  componentDidMount: function(){
    KeyStore.addListener(this._recorderChanged);
  },

  componentWillUnmount: function(){
    KeyStore.removeListener(this._recorderChanged);
  },
  startRecording: function(){
    this.setState({ isRecording: true });
    this.state.track.startRecording();
  },
  stopRecording: function(){
    this.setState({ isRecording: false });
    this.state.track.stopRecording();
  },

  render: function(){
    return(
      <div>
        <button onClick={this.startRecording}>Record</button>
        <button onClick={this.stopRecording}>Stop</button>
        <div>{this.state.track.name}</div>
      </div>
    );
  }
});


module.exports = Recorder;
