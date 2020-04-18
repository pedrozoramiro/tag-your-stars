import React from 'react';
import logo from './logo.svg';
import GitHubLogin from 'react-github-login';
import './App.css';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <GitHubLogin clientId="dce7e3025651dbf7d995"
          redirectUri="http://localhost:3000/"
          onSuccess={onSuccess}
          onFailure={onFailure}/>,

      </header>
    </div>
  );
}

export default App;
