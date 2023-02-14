//import './App.css';
import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import BottomPage from "./BottomPage";
import SearchBar from "./SearchBar";

function App() {

  
  return (
    <div className="app">
      <Header />
      <NavBar />
      <HomePage />
      <BottomPage />
      <SearchBar placeholder="Search for a painting by color.."/>
    </div>
  );
}

export default App;
