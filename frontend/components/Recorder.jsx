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
    if (this.state.isRecording){
      this.setState({ isRecording: false });
      this.state.track.stopRecording();
    }
  },
  playback: function(){
    if (!this.state.isRecording){
      this.state.track.play(this.state.track.roll);
    }
  },
  render: function(){
    var recorderStyle = {
      fontSize: "20px",
      marginLeft: "5px",
      marginBottom: "5px"
    };
    var rollStyle = {
      position: "relative"
    };
    return(
      <div>
        <button style={recorderStyle} onClick={this.startRecording}>Record</button><br/>
        <button style={recorderStyle} onClick={this.stopRecording}>Stop</button><br/>
        <button style={recorderStyle} onClick={this.playback}>Playback</button><br/>
        <ul style={rollStyle}>
          {
            this.state.track.roll.map(function(element, idx){
              return (
                <li>{element.timeSlice}: {element.notes}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Recorder;
