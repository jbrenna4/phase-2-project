import React, {useState, useEffect} from "react";

function RandomQuote(){

    const [quote, setQuote] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/quotes")
        .then(res => res.json())
        .then(setQuote)
    },[]);

    const randomNumber = () => {
        return Math.floor(Math.random()*23)
    }


    function renderQuote(){
        console.log(quote[randomNumber()].quote)
    }
    
    return(
        <div className="randomQuote">
            <button className="quoteButton" >Random Quote Button</button>
            <p>{quote}</p>
        </div>
    )
}

export default RandomQuote;