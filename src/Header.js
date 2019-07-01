import React from 'react';

const Header = () => {
    return(
       <div style={headerStyle}>
            <h1 style = {{fontSize : '1.5rem', marginBottom:'0', fontFamily: '"Permanent Marker", cursive'}}>MOVIE SEARCH APP</h1>
            <p style = {{fontSize : '0.8rem', marginTop:'0', fontFamily: '"Lobster", cursive'}}>Search and read a little about your favorite movies...</p>
       </div>
    )
}
const headerStyle = {
    marginTop : '50px',
    color : '#f0f0f0'
}

export default Header;