import React from 'react';
import GitHubLogin from 'react-github-login';
import '../styles/App.css';
import autenticaton from '../api/authentication'

const onSuccess = code => autenticaton.login(code).then(data => {
  console.log(data);
  localStorage.setItem('@tag-your-star/user', JSON.stringify(data.data));
  window.location.reload();
});

const handleLogout = () => {
  localStorage.removeItem('@tag-your-star/user');
  window.location.reload();
}

const onFailure = response => console.error(response);

function App() {
  const user = JSON.parse(localStorage.getItem('@tag-your-star/user'));
  if(user){
    return(
      <div>
      <p>Bem vindo {user.name}</p>
      <button onClick={handleLogout}>Sair</button>
    </div>);
}

  return (
    <div className="App">
      <header className="App-header">
          <GitHubLogin clientId="dce7e3025651dbf7d995"
          redirectUri="http://localhost:3000/"
          onSuccess={onSuccess}
          onFailure={onFailure}/>
      </header>
    </div>
  );
}

export default App;
