import React, {Component} from 'react';
//import profile from './pages/profile';
import './styles/styles.scss';
//import Axios from 'axios';
import Header from "./components/header/header"

const baseUrl = 'http://localhost:3000';
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

class App extends Component {
    state = {
      isSignedUp: false,
      isLoggedIn: false,
      isLoginError: false,
      errorMessage: "",
    }

    handleSignup = (e) => {
      e.preventDeault();
      //axios.post
    };

    handleLogin = (e) => {
      e.preventDefault();
     // axios.post
    };

    renderSignUp() {
      return (
        <div>
          <h1>Sign Up </h1>
          <form onSubmit={this.handleSignup}>
            <div className="form-group">
              Username: <input type="text" name="username" />
              </div>
              <div className="form-group">
                Name: <input type="text" name="name" />
              </div>
              <div className="form-group">
                password: <input type="password" name="password" />
              </div>
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
          </form>
        </div>
      );
    }

renderLogin=() => {
  const { isLoginError, errorMessage } = this.state;
  return(
    <div>
      <h1>Login</h1>
      {isLoginError && <label className="error">{errorMessage}</label>}
      <form onSubmit={this.handleLogin}>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

render(){
  const {isLoggedIn, isSignedUp} =this.state;

  if(!isSignedUp) return this.renderSignup();
  if (!isLoggedIn) return this.renderLogin();

  return (
    <div className="App">
      <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/ED7Mr5Eg83ocbhsPpY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/AoE-Community-ED7Mr5Eg83ocbhsPpY">via GIPHY</a></p>
      
      <Header />
    </div>
    );
  }

}

export default App;
