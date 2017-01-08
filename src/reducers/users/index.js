import { combineReducers } from 'redux';

import byId from './byId';
import allIds from './allIds';
import currentId from './currentId';

export default combineReducers({
  byId,
  allIds,
  currentId,
});
