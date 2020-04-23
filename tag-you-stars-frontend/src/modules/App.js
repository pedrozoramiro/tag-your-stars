import React , {Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route } from "react-router-dom";
import '../styles/App.css';
import RepositoryList from './RepositoryList'
import Login from './Login';
import PrivateRoute from '../common/PrivateRoute';
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';
import '../css/App.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class App extends Component {


state = {
  currentUser: null,
  loading: false
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>TAG YOUR STAR</h4>
          <h3>Permite adicionar uma tag a um repositório do github para que ele possa ser encontrado facilmente.</h3>
        </div>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute path="/list" 
              authenticated={true} 
              component={RepositoryList}>
        </PrivateRoute>
        <Route path="/redirect" component={OAuth2RedirectHandler}></Route>  
      </div>
     );
  }
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(App);
