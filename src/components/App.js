//import './App.css';
import React from "react";
import Header from "./Header";
import HomePage from "./HomePage";

//import NavBar from "./NavBar";


import BottomPage from "./BottomPage";
import SearchBar from "./SearchBar";

function App() {

 
//  const [searchTerm, setSearchTerm] = useState("");
//   console.log(searchTerm);

  //const filteredPaintings = paintings.filter((painting) => console.log(painting));

  return (
    <div className="app">
      <Header />
      <HomePage />
      <BottomPage />
      
    </div>
  );
}
      

export default App;
