import React , {Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route } from "react-router-dom";
import '../styles/App.css';
import RepositoryList from './RepositoryList'
import Login from './Login';
import { actions as userActions, selectors as userSelectors } from './data/userReducer';
import PrivateRoute from '../common/PrivateRoute';
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';

class App extends Component {


state = {
  currentUser: null,
  loading: false
}


componentDidMount() {
  this.props.getUserLogged();
}

  render() {
    const { currentUser } = this.props;
    console.log(currentUser)
    return (
    <div className="app">
      <Route exact path="/login" component={Login}/>
      <PrivateRoute path="/list" 
            authenticated={true} 
            currentUser={currentUser}
              component={RepositoryList}>
       </PrivateRoute>
       <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
    </div>
     );
  }
}


const mapStateToProps = (state) => ({
  currentUser: userSelectors.getUser(state)
});

const mapDispatchToProps = {
  ...userActions,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(App);
