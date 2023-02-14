import React, { useState } from "react" ;

function PaintingCard({ name, image, season, youtube}) {

  const [clicked, setClicked] = useState(true);


     function handleClick() {
     if (clicked === true) {
       setClicked(false);
   }
    else {
      setClicked(true);
    }}
  return (
    <div>
    <li className="card">
      <h4>{name}</h4>
      <img 
      src={image} 
      alt={name} 
      // onClick = {handleClick}
      />
      <p>Season: {season}</p>      
      <p>{youtube}</p>
    </li>
    </div>
  );
}

export default PaintingCard;