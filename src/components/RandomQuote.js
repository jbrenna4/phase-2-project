import React, {useState, useEffect} from "react";

function RandomQuote(){

    const [quote, setQuote] = useState([]);
    const [randNum, setRandNum] = useState(1);
  
    useEffect(() => {
      fetch(`http://localhost:3000/quotes/${randNum}`)
        .then(res => res.json())
        .then((quote) => setQuote(quote))
    },[randNum]);

    console.log(quote);

    const randomNumber = () => {
        setRandNum(Math.floor(Math.random()*23)+1)
    }

    console.log(randNum);
    
    return(
        <div className="randomQuote">
            <button className="quoteButton" onClick={randomNumber}>New Quote</button>
            <p className="quoteText" style={{color:"green"}}>{quote.quote}</p>
        </div>
    )
}

export default RandomQuote;