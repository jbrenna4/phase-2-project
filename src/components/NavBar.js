import React from "react";
import RandomQuote from "./RandomQuote";


function NavBar() {
    return (
    <nav class="topnav">
        <ul>
          <li>
            <a href="/HomePage">Home</a>
          </li>
          <li>
            <a href="./Bio">Bio</a>
          </li>
          <li>
            <a href="./PaintingList">Paintings</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
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