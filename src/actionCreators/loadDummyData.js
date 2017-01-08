import { normalize } from 'normalizr';

import users from '../schemas/users';
import loadingStart from './loadingStart';
import loadingStop from './loadingStop';
import fetchUsers from './fetchUsers';
import { DUMMY_DATA_URL } from '../constants';

const loadDummyData = () => dispatch => {
  dispatch(loadingStart());

  fetch(DUMMY_DATA_URL)
      .then(response => response.json())
      .then(data => {
        dispatch(loadingStop());
        dispatch(fetchUsers(normalize(data, users)));
      });
};

export default loadDummyData;
