import { schema } from 'normalizr';

import user from './user';

const users = new schema.Array(user);

export default users;
