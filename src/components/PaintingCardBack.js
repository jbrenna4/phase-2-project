import React, { useState } from "react" ;

function PaintingCardBack({ name, image, id, handleClick, comments, handlePatch}) {
    
    //setting state to grab the value of our comment input
    const [comment, setComment] = useState("");


    //handleSubmit => it has our PATCH inside of it
    const handleSubmit = (event) => {
        event.preventDefault();
        const newCommentObj = {comments: [...comments, comment]}
        console.log(newCommentObj);

            fetch(`http://localhost:3000/paintings/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newCommentObj)
                })
                .then(response => {
                    console.log(response.status); 
                    return response.json();
                })
                .then(data => handlePatch(data));
      }



  return (
    <div>
    <li className="card">
      <h3>{name}</h3>
      <img 
      src={image} 
      alt={name}
      onClick = {handleClick} 
      />
      <form onSubmit={handleSubmit}>
        <label>Enter Comment:
            <input 
                type="text"
                value= {comment}
                onChange={(e) => setComment(e.target.value)} 
            />
        </label>
      </form>
      <h4>Comments</h4>
      <p>{comments}</p>
    </li>
    </div>
  );
}

export default PaintingCardBack;