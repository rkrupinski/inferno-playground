import { createSelector } from 'reselect';

const allIdsSelector = state => state.users.allIds;
const byIdSelector = state => state.users.byId;

export default createSelector(
  allIdsSelector,
  byIdSelector,
  (allIds, byId) => allIds.map(id => byId[id])
);
