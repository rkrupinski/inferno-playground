import { FETCH_USERS } from '../../constants';

export default function allIds(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS:
      return payload.result;
    default:
      return state;
  }
}
