import React from "react";

import { NavLink } from "react-router-dom"



function NavBar({ searchColor, onChangeColor }) {

    //eventListener goes here
    function handleChangeColor(event) {
      onChangeColor(event.target.value);
    };


    return (
    <nav className="topnav">
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/paintings">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">Bio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/randombob">Words of Wisdom</NavLink>
          </li>

          <div class="search">
            <select id="select-color" class="filter" placeholder="Pick a color..." onChange={handleChangeColor}>
                <option value="">Pick a color...</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="brown">Brown</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
          </div>
        </ul>
    </nav>
  )
}
  
  export default NavBar;