import React from "react";
import PaintingCard from "./PaintingCard";

function PaintingList({ paintings, comment, onChangeComment, handlePatch }) {

  const cards = paintings.map((painting) => (
    <PaintingCard
      key = {painting.id}
      id = {painting.id}
      name = {painting.painting_title}
      image = {painting.img_src}
      colors = {painting.colors}
      youtube = {painting.youtube_src}
      season = {painting.season}
      paintSort = {painting.painting_index}
      numColors={painting.num_colors}
      comment = {comment}
      onChangeComment = {onChangeComment}
      comments = {painting?.comments}
      handlePatch = {handlePatch}
    />
  ))

  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PaintingList;