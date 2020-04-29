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
import EditTag from './EditTag';

class App extends Component {
  render() {
   var token = localStorage.getItem("ACCESS_TOKEN");
    return (
      <div className="App">
        <Route exact path="/login" component={Login}/>
        <Route exact path="/project/:project_id/addtag" component={EditTag}/>
        <PrivateRoute path="/list" 
              authenticated={!!token} 
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
