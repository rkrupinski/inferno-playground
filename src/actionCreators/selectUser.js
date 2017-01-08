import { SELECT_USER } from '../constants';

export default id => ({
  type: SELECT_USER,
  payload: { id },
});
