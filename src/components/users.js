import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';

import usersSelector from '../selectors/users';
import Loader from './loader';
import User from './user';

class Users extends Component {
  render() {
    return (
      this.props.loading ?
      <Loader /> :
      <ul>
        {this.props.users.map(user =>
            <User key={user.id} data={user} />)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    users: usersSelector(state),
  };
}

export default connect(
  mapStateToProps
)(Users);
