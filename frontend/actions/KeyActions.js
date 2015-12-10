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
  }
};

module.exports = KeyActions;
