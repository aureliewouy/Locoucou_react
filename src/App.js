import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import jwtDecode from "jwt-decode";
// Redux
import {Provider} from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userAction';
//Components
import Navbar from './components/navbar';
import AuthRoute from "./util/AuthRoute";
// pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup_shop';
import profil from "./pages/profil";
import axios from 'axios';
import myshop from './pages/myshop';

const token = localStorage.FBIdToken;

if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser());
  } else {
    store.dispatch({type: SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
<Provider store={store}>
      <Router>
      <Navbar/>
      <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <AuthRoute exact path="/login" component={login}/>
            <AuthRoute exact path="/signup_shop" component={signup}/>
            <AuthRoute exact path="/profil" component={profil}/>
            <AuthRoute exact path="/myshop" component={myshop}/>
          </Switch>
      </div>
      </Router>
</Provider>
    );
  }
}

export default App;
