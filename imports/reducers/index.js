import { combineReducers, createStore } from 'react-redux'
import drawer from './drawer'

const reducers = combineReducers({
  drawer
});

module.exports = createStore(reducers);
