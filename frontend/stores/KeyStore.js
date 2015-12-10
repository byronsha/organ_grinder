var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var KeyStore = new Store(AppDispatcher);
var _keys = [];

var keyPress = function(key){
  if (_keys.indexOf(key) === -1){
    _keys.push(key);
    KeyStore.__emitChange();
  }
};

var keyRelease = function(key){
  _keys.splice(_keys.indexOf(key), 1);
  KeyStore.__emitChange();
};

var groupUpdate = function(keys){
  _keys = keys.slice();
  KeyStore.__emitChange();
}

KeyStore.all = function(){
  return _keys.slice();
};

KeyStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "KEY_PRESS":
      keyPress(payload.key);
      break;
    case "KEY_RELEASE":
      keyRelease(payload.key);
      break;
    case "GROUP_UPDATE":
      groupUpdate(payload.keys);
      break;
  }
};


module.exports = KeyStore;
