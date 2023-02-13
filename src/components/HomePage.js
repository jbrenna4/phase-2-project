import React, {useEffect} from "react";


function HomePage({searchTerm, onChange}) {

  useEffect(() => {

    fetch("http://localhost:6001/plants")

      .then((r) => r.json())

      .then(data => console.log(data));

  }, []);

  function handleChange(e){
    onChange(e.target.value);

  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value = {searchTerm}
      />
    </div>
  );
}

export default HomePage;