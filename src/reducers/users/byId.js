import { FETCH_USERS } from '../../constants';

export default function byId(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS:
      return payload.entities.user;
    default:
      return state;
  }
}
