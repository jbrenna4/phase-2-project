import React, {useState, useEffect} from "react";
import PaintingList from "./PaintingList";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

function HomePage() {

  const [paintings, setPaintings] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  useEffect(() => {

    fetch("http://localhost:3000/paintings")

      .then((r) => r.json())

      .then(setPaintings);

  }, []);

//  function handleChange(e){
//    onChange(e.target.value);

//  }
const filteredPaintings = paintings.filter((painting) => console.log(painting));


  return (
    <main>
      <NavBar/>
      <PaintingList paintings = {paintings} />
      <SearchBar placeholder="Search for a painting by color.." setSearchTerm={setSearchTerm}/>
    </main>
  );
}





export default HomePage;