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

      const commentArray = comments.map(comment => <p>{comment}</p>)


  return (
    <div>
    <li className="card">
      <h3 className="backCardPaintingName">{name}</h3>
      <img 
      src={image} 
      alt={name}
      onClick = {handleClick} 
      />
      <div className='userForm'>
        <form onSubmit={handleSubmit} className="form">
          <label>Enter Comment:
              <input 
                type="text"
                value= {comment}
                onChange={(e) => setComment(e.target.value)} 
              />
          </label>
        </form>
      <h4>Comments</h4>
      <p>{commentArray}</p>
      </div>
    </li>
    </div>
  );
}

export default PaintingCardBack;