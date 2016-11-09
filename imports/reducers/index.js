import { combineReducers, createStore } from 'redux'
import drawer from './drawer'
import snackbar from './snackbar'
import modal from './modal'
import loading from './loading'

const reducers = combineReducers({
  drawer,
  snackbar,
  modal,
  loading
});

module.exports = createStore(reducers);
