import React, {useState, useEffect} from "react";

function RandomQuote(){

    const [quote, setQuote] = useState([]);
    
    useEffect(() => {
        fetch("https://api.bobross.dev/api/10"
        , 
        
            {mode: 'no-cors'},
        
    )
        .then(r=>r.json())
        .then(data=>console.log(data))
    },[]);

    function renderQuote(){
        // console.log(quote);
    }
    
    return(
        <div className="randomQuote">
            <p>{renderQuote} </p>
        </div>
    )
}

export default RandomQuote;