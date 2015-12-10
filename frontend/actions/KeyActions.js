var AppDispatcher = require('../dispatcher/Dispatcher.js');

var KeyActions = {
  press: function(noteName){
    AppDispatcher.dispatch({
      actionType: "KEY_PRESS",
      key: noteName
    });
  },
  release: function(noteName){
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASE",
      key: noteName
    });
  },
  groupUpdate: function(noteNames){
    AppDispatcher.dispatch({
      actionType: "GROUP_UPDATE",
      keys: noteNames
    })
  }
};

module.exports = KeyActions;
