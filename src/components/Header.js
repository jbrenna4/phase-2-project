import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="bobRossTop">
        Bob Ross
        <span className="logo" role="img">
        🖌️
        </span>
      </h1>
      <a className='instagramButton' href="https://www.instagram.com/bobross_thejoyofpainting/?hl=en">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" />
      </a>
      <a className='twitterButton' href="https://twitter.com/BobRossOfficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
        <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
      </a>      
    </header>
  );
}

export default Header;