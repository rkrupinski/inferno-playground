import { SELECT_USER, DESELECT_USER } from '../../constants';

export default function currentId(state = null, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_USER:
      return payload.id;
    case DESELECT_USER:
      return null;
    default:
      return state;
  }
}
