import { combineReducers, createStore } from 'redux'
import drawer from './drawer'
import snackbar from './snackbar'

const reducers = combineReducers({
  drawer,
  snackbar
});

module.exports = createStore(reducers);
