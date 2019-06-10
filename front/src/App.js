import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Nav.js';
import Home from './pages/Home.js';
import Nutrition from './pages/Nutrition.js';
import Recipes from './pages/Recipes.js';
import Signup from "./pages/Signup";
import Login from "./pages/Login";



class App extends Component {
  constructor(){
    super()
    this.fetchUser = this.fetchUser.bind(this)
    this.logout = this.logout.bind(this)
  }
  state = {
    user: {},
    err: null
  }
  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = ()=> {
//`${process.env.REACT_APP_BACK_END_BASE_URL}users/get-user`
    axios({
      url:"http://localhost:5000/users/get-user",
      
      method: "post",
      withCredentials: true
    })
    .then((response)=> {
      this.setState({
        user: response.data
      }
      //()=> {
      //  debugger
      //  this.props.history.push("/recipes")
      //}
      )
    })
    .catch(err=> {
      this.setState({
        err: err
      })
    })
  }

  logout() {
    axios({
      method: "post",
      withCredentials: true,
      url: `http://localhost:5000/users/logout`,
      config: {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
      }
    })
    .then((response)=> {
      this.setState({
        user: {}
      })
    })
    .catch((err)=> {
      this.setState({
        err
      })
    })
  }

  render() {
    return (
      <div className="main-div">        
      <NavBar user={this.state.user} logout={this.logout} />
      <div className="main-div">
      <Route exact path="/login" render={(props)=> <Login {...props} fetchUser={this.fetchUser} />} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Home} />
      <Route exact path="/nutrition" component={Nutrition} />
      <Route exact path="/recipes" component={Recipes} />
      </div>
      </div>
    );
  }
}

export default App;
//https://api.edamam.com/search?q=chicken&app_id=055ff9a5&app_key=
//e9a55a578031bde78586ef9e1584ae78	&from=0&to=3&calories=591-722&health=alcohol-free