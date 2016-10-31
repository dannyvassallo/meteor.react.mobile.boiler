import { combineReducers, createStore } from 'redux'
import drawer from './drawer'

const reducers = combineReducers({
  drawer
});

module.exports = createStore(reducers);
