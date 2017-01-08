import Inferno from 'inferno';
import { Link } from 'inferno-router';

const User = ({ data }) => {
  const { name, id } = data;

  return (
    <li>
      <Link to={`/user/${id}`}>{name}</Link>
    </li>
  );
};

export default User;
