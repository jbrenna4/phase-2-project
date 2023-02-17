import React from "react";

function Bio(){
    return (
        <div className="bio">
            <h2 className="bioTitle">Biography</h2>
            <div className='bioText'>
            <p>Robert Norman Ross (October 29, 1942 – July 4, 1995) was an American painter, art instructor, and television host.</p>
            <p>He was the creator and host of The Joy of Painting, an instructional television program that aired from 1983 to 1994 on PBS in the United States, CBC in Canada, and similar channels in Latin America, Europe and elsewhere.</p>
            <p>Ross would subsequently become widely known through his posthumous internet presence.</p>

            <a className='bobWiki' href="https://en.wikipedia.org/wiki/Bob_Ross">Read more about Bob Ross</a>
            </div>
            <img className='bioImage' src="https://media.npr.org/assets/img/2016/08/22/bobearly1_custom-370196c6c7ccc113e242096bb8e7164e96af78f9.jpg"/>
        </div>
    )
}

export default Bio;