import React , {Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../styles/App.css';
import RepositoryList from './RepositoryList'
import Login from './Login';
import { actions as userActions, selectors as userSelectors } from './data/userReducer';

class App extends Component {

componentDidMount() {
  this.props.getUserLogged();
}

  render() {
    const { user } = this.props;
    console.log(user)
    return ( user ? <RepositoryList user={user} /> : <Login/>);
  }
}


const mapStateToProps = (state) => ({
  user: userSelectors.getUser(state)
});

const mapDispatchToProps = {
  ...userActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(App);
