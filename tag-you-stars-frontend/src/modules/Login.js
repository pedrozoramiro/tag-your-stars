import React , {Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GitHubLogin from 'react-github-login';
import githubLogo from '../styles/github-logo.png'
import '../styles/App.css';

class Login extends Component {


  onSuccess = data => {
    console.log(this.props);
    const { history } = this.props;
    history.push("/redirect")
  };
  
  handleLogout = () => {
   // window.location.reload();
  }

  onFailure = response => console.error(response);


    render() {

      var teste = `https://github.com/login/oauth/authorize?client_id=06d84754c830891922dc&scope=user:email`;
      teste = 'http://localhost/api/v1/login/oauth2/code/github?redirect_uri=http://localhost/oauth2/redirect'

        return(  
        <div className="App">

            <div className="social-login">
                <a className="btn btn-block social-btn github" href={teste}>
                    <img src={githubLogo} alt="Github" /> Log in with Github</a>
            </div>


        <header className="App-header">

   


            <GitHubLogin clientId="06d84754c830891922dc"
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