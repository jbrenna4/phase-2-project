import React from "react";

import RandomQuote from "./RandomQuote";

import { NavLink } from "react-router-dom"



function NavBar() {

    //eventListener goes here

    return (
    <nav class="topnav">
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Bio</NavLink>
          </li>
          <li>
            <NavLink to="/paintings">Paintings</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <div class="search">
            <select id="select-color" placeholder="Pick a color...">
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
          <div class="checkbox">
            <label>
              <input type="checkbox" />
              Sort by season
            </label>
          </div>
          <RandomQuote />
        </ul>
    </nav>
  )
}
  
  export default NavBar;