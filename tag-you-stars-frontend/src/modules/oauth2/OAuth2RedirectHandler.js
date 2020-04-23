import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';

import { actions as userActions, selectors as userSelectors } from '../data/userReducer';

class OAuth2RedirectHandler extends Component {


    componentDidMount() {
        setTimeout(() => {
            console.log("VAIIIIIIIIIIIIIIIII")
            this.props.getUserLogged();
            console.log("BEZERRO")
        }, 10000);

    }


    render() {        
        var {currentUser} = this.props;
        console.log(currentUser);
        if(currentUser) {
            return <Redirect to={{
                pathname: "/list",
                state: { from: this.props.location }
            }}/>; 
        } 
        else {
            return (<div>loading user ... </div> ); 
        }
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
  )(OAuth2RedirectHandler);