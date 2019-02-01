import React from 'react';
import errorImage from './no-image.gif';

const MovieCard = ({movie, singleMovie}) => {
    const { Poster, Title, Year, imdbID } = movie;
    return(
        <div className='card' style={cardStyle}>
            <img width='300px' height='300px' src={Poster === 'N/A' ? errorImage : Poster} alt='movie' />
            <p><h3>{ Title }</h3></p>
            <p>{ Year }</p>
            <p>imdbID : { imdbID }</p>
            <button onClick={() => singleMovie(imdbID)}>See More</button>
        </div>
    )
}

const cardStyle = {
    border: '2px solid black',
    margin: '10px',
    borderRadius: '5px',
    width: '300px',
    display : 'inline-block',
    height: '500px'

}


export default MovieCard;