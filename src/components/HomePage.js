import React, {useState, useEffect} from "react";
import PaintingList from "./PaintingList";


function HomePage() {

  const [paintings, setPaintings] = useState([])

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
      <PaintingList paintings = {paintings} />
    </main>
  );
}
export default HomePage;