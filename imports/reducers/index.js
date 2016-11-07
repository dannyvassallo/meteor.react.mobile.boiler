import { combineReducers, createStore } from 'redux'
import drawer from './drawer'
import snackbar from './snackbar'
import modal from './modal'

const reducers = combineReducers({
  drawer,
  snackbar,
  modal
});

module.exports = createStore(reducers);
