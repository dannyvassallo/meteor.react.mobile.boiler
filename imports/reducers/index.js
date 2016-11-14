import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import drawer from './drawer'
import snackbar from './snackbar'
import modal from './modal'
import loading from './loading'
import thunk from 'redux-thunk'

const reducers = {
  drawer,
  snackbar,
  modal,
  loading
};

module.exports = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk))
);
