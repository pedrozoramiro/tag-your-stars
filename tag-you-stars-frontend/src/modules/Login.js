import React , {Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GitHubLogin from 'react-github-login';
import '../styles/App.css';

class Login extends Component {

  onSuccess = data => {
    window.location.reload();
  };
  
  handleLogout = () => {
    window.location.reload();
  }

  onFailure = response => console.error(response);


    render() {
        return(  
        <div className="App">
        <header className="App-header">
            <GitHubLogin clientId="06d84754c830891922dc"
            redirectUri="http://localhost"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}/>
        </header>
      </div>);
    }
}

const mapStateToProps = (state) => ({
  });
  
  const mapDispatchToProps = {
  };
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
  )(Login);