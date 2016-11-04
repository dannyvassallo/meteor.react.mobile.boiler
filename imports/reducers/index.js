import { combineReducers, createStore } from 'redux'
import drawer from './drawer'
import snackbar from './snackbar'
import taskform from './taskform'

const reducers = combineReducers({
  drawer,
  snackbar,
  taskform
});

module.exports = createStore(reducers);
