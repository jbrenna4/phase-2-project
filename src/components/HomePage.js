import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import PaintingList from "./PaintingList";
import NavBar from "./NavBar";

//import SearchBar from "./SearchBar";

import Bio from "./Bio";
import Contact from "./Contact";
import RandomQuote from "./RandomQuote";



function HomePage() {

  const [paintings, setPaintings] = useState([])

  const [searchColor, setSearchColor] = useState("");

  const [comment, setComment] = useState("");


  //const [page, setPage] = useState("/")


  useEffect(() => {

    fetch("http://localhost:3000/paintings")

      .then((r) => r.json())

      .then(setPaintings);

  }, []);

  function handlePatch(newCommentObj) {
    const patchedArray = paintings.map((painting) => {
      if (painting.id === newCommentObj.id) {
        return newCommentObj 
      }
      else {
        return painting
      }
    });
    setPaintings(patchedArray)

  };

  const filteredPaintings = paintings.filter((painting) => painting.colors.toLowerCase().includes(searchColor.toLowerCase()))
  console.log(filteredPaintings);

//  function handleChange(e){
//    onChange(e.target.value);

//  }
//const filteredPaintings = paintings.filter((painting) => console.log(painting));

//<NavBar/>
//<PaintingList paintings = {paintings} />
//<SearchBar placeholder="Search for a painting by color.." setSearchTerm={setSearchTerm}/>

  return (
    <main>

      <NavBar onChangeColor={setSearchColor} searchColor = {searchColor}/>
      <Switch>
          <Route path="/about">
              <Bio />
          </Route>
          <Route path="/paintings">
            <PaintingList paintings = {filteredPaintings} comment = {comment} onChangeComment = {setComment} handlePatch ={handlePatch}/>
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          <Route exact path="/">
            <PaintingList paintings = {filteredPaintings} comment = {comment} onChangeComment = {setComment} handlePatch ={handlePatch}/>
          </Route>
          <Route path="/randombob">
              <RandomQuote />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
      </Switch>

    </main>
  );
}





export default HomePage;