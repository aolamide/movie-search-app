import React from 'react';
import errorImage from './no-image.gif';

const MovieCard = ({movie, singleMovie}) => {
    const { Poster, Title, Year, imdbID } = movie;
    return(
        <div onClick={() => singleMovie(imdbID)} className='card' style={cardStyle}>
            <img width='150px' height='200px' src={Poster === 'N/A' ? errorImage : Poster} alt={Title} />
            <h4>{ Title } </h4>
            <p>{ Year }</p>
        </div>
    )
}

const cardStyle = {
    margin: '10px',
    borderRadius: '5px',
    width: '150px',
    display : 'inline-block',
    height: '300px'
}


export default MovieCard;