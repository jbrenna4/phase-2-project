//import './App.css';
import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import BottomPage from "./BottomPage";

function App() {

  
  return (
    <div className="app">
      <Header />
      <NavBar />
      <HomePage />
      <BottomPage />
    </div>
  );
}

export default App;
