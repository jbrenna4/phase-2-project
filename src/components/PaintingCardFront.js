import React, { useState } from "react" ;

function PaintingCardFront({ name, image, season, youtube, handleClick}) {


  return (
    <div>
    <li className="card" onClick = {handleClick}>
      <h3>{name}</h3>
      <img 
      src={image} 
      alt={name} 
      />
      <p>Season: {season}</p>       
      <p>{youtube}</p>
    </li>
    </div>
  );
}

export default PaintingCardFront;