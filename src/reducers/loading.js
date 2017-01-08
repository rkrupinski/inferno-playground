import { LOADING_START, LOADING_STOP } from '../constants';

export default function loading(state = false, action) {
  const { type } = action;

  switch (type) {
    case LOADING_START:
      return true;
    case LOADING_STOP:
      return false;
    default:
      return state;
  }
}
