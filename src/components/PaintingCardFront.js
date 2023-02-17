import React, { useState } from "react" ;

function PaintingCardFront({ name, image, season, youtube, handleClick}) {


  return (
    <div className="paintingDiv">
    <li className="card" onClick = {handleClick}>
      <h3 className='paintingName'>{name}</h3>
      <img 
      src={image} 
      alt={name} 
      />
      <p className="seasonLabel">Season: {season}</p>
      <a href={youtube} class='youtubeButton'>
      Lead the way Bob
      </a>       
      {/* <p>{youtube}</p> */}
    </li>
    </div>
  );
}

export default PaintingCardFront;