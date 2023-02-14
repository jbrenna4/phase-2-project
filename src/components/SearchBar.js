import React from 'react';



function SearchBar({setSearchTerm, placeholder}) {

   //console.log(setSearchTerm)
    function handleChange (e) {
        setSearchTerm(e.target.value);
    }
    

    return (
        <div className="search">
            <div className="searchInput">
            <input type="text" className="searchTerm" onChange={handleChange}  placeholder={placeholder}  />
            
            <div className="searchIcon">
            </div>
        </div>
        
        <div className="searchResults"></div>
        
        </div>
    )
    }

export default SearchBar;