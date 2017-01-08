import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { Link } from 'inferno-router';

import currentUserSelector from '../selectors/currentUser';
import selectUser from '../actionCreators/selectUser';
import deselectUser from '../actionCreators/deselectUser';

class UserDetails extends Component {
  componentWillMount() {
    const { params, selectUser } = this.props;

    selectUser(params.id);
  }
  componentWillUnmount() {
    const { deselectUser } = this.props;

    deselectUser();
  }
  render() {
    const { user } = this.props;

    return user /* ¯\_(ツ)_/¯ */ ? (
      <div>
        <h1>{ user.name }</h1>
        <p>{ user.email }</p>
        <Link to="/">Back</Link>
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    user: currentUserSelector(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    selectUser() {
      dispatch(selectUser(ownProps.params.id));
    },
    deselectUser() {
      dispatch(deselectUser());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
