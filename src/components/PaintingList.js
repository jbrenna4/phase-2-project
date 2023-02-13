import React from "react";
import PaintingCard from "./PaintingCard";

function PaintingList({ paintings }) {

  const cards = paintings.map((painting) => (
    <PaintingCard
      key = {painting.id}
      name = {painting.painting_title}
      image = {painting.img_src}
      colors = {painting.colors}
      youtube = {painting.youtube_src}
      season = {painting.season}
      paintSort = {painting.painting_index}
    />
  ))

  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PaintingList;