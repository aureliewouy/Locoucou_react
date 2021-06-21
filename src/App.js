import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import jwtDecode from "jwt-decode";
//Components
import Navbar from './components/navbar';
import AuthRoute from "./util/AuthRoute"
// pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup_shop';

const token = localStorage.FBIdToken;
let authenticated;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }

}

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <AuthRoute exact path="/login" component={login}
            authenticated={authenticated}/>
            <AuthRoute exact path="/signup_shop" component={signup}
            authenticated={authenticated}/>
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
