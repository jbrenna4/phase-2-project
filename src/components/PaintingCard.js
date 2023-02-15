import React, { useState } from "react" ;
import PaintingCardBack from "./PaintingCardBack";
import PaintingCardFront from "./PaintingCardFront";

function PaintingCard({ name, image, season, youtube, id, comment, onChangeComment, numColors, comments, handlePatch }) {

  const [showFront, setShowFront] = useState(true);

  function handleClick(){
    setShowFront((showFront) => !showFront);
  }

  return (
    showFront? 
    <PaintingCardFront 
      name = {name}
      image = {image}
      youtube = {youtube}
      season = {season}
      showFront = {showFront}
      onChangeShowFront = {setShowFront}
      handleClick = {handleClick}/> 
    :

    <PaintingCardBack 
    id = {id}
    name = {name}
    image = {image}
    youtube = {youtube}
    season = {season}
    numColors = {numColors}
    showFront = {showFront}
    onChangeShowFront = {setShowFront}
    handleClick = {handleClick}
    comment = {comment}
    onChangeComment = {onChangeComment}
    comments = {comments}
    handlePatch = {handlePatch}
    />
      
  );
}

export default PaintingCard;