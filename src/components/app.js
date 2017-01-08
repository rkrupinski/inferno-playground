import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';

import loadDummyData from '../actionCreators/loadDummyData';

class App extends Component {
  componentDidMount() {
    this.props.loadDummyData();
  }
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  null,
  { loadDummyData }
)(App);
