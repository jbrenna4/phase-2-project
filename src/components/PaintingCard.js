import React from "react";

function PaintingCard({ name, image, season, youtube}) {

//    const [instock, setInStock] = useState(true);

//    function handleClick() {
//      setInStock((instock => !instock));
//    }


  return (
    <li className="card">
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <p>Season: {season}</p>      
      <p>{youtube}</p>
    </li>
  );
}

export default PaintingCard;