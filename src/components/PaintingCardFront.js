import React, { useState } from "react" ;

function PaintingCardFront({ name, image, season, youtube, handleClick}) {


  return (
    <div className="paintingDiv">
    <li className="card">
      <h3 className='paintingName'>{name}</h3>
      <img 
      src={image} 
      alt={name}
      onClick = {handleClick} 
      />
      <p className="seasonLabel">Season: {season}</p>
      <a href={youtube} class='youtubeButton'>
      Let's paint
      </a>       
      {/* <p>{youtube}</p> */}
    </li>
    </div>
  );
}

export default PaintingCardFront;