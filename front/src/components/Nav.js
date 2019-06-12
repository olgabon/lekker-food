import React from 'react';
import './Nav.css';
import {Link } from "react-router-dom";

const Nav = (props) => {

  return (
    <div class="navbar-start">
        
        <Link to="/nutrition" class="navbar-item" >Nutritions</Link>
        <Link to="/recipes" class="navbar-item" >Recipes</Link>
        <Link to="/" class="navbar-item-home" >Health Style</Link>
        {
          Object.keys(props.user).length === 0?
          <div>
          <Link to="/login" class="navbar-item" >Log in</Link>
          <Link to="/signup" class="navbar-item" >Sign up</Link>
          </div>
          :
          <div>
              <Link to={"/favourite"}>Favourite</Link>
              <Link onClick={props.logout}>Log out</Link>
          </div>
        }
</div>
  );
}

export default Nav;

