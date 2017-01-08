import { createSelector } from 'reselect';

const currentIdSelector = state => state.users.currentId;
const byIdSelector = state => state.users.byId;

export default createSelector(
  currentIdSelector,
  byIdSelector,
  (currentId, byId) => byId[currentId]
);
