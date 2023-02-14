import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import PaintingList from "./PaintingList";
import NavBar from "./NavBar";
import Bio from "./Bio";
import Contact from "./Contact";


function HomePage() {

  const [paintings, setPaintings] = useState([])
  const [page, setPage] = useState("/")

  // function getCurrentPage() {
  //   switch(page) {
  //       case "/":
  //           return <PaintingList paintings = {paintings}/>
  //       case "/about":
  //           return <Bio />
  //       case "/paintings":
  //           return <PaintingList paintings = {paintings}/>
  //       case "/contact":
  //           return <Contact />  
  //       default:
  //           return <h1>404 not found</h1>
  //   }
  // }

  useEffect(() => {

    fetch("http://localhost:3000/paintings")

      .then((r) => r.json())

      .then(setPaintings);

  }, []);

//  function handleChange(e){
//    onChange(e.target.value);

//  }


  return (
    <main>
      <NavBar onChangePage={setPage} />
      <Switch>
          <Route path="/about">
              <Bio />
          </Route>
          <Route path="/paintings">
            <PaintingList paintings = {paintings}/>
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          <Route exact path="/">
            <PaintingList paintings = {paintings}/>
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
      </Switch>
    </main>
  );
}
export default HomePage;