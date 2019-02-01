import React from 'react';
import MovieCard from './MovieCard';

const MovieCards = ({data, singleMovie}) => {
    if(data){
        return (
            <div style={{paddingTop: '70px'}}>
                 {data.map(movie => <MovieCard singleMovie={singleMovie} key={movie.imdbID} movie={movie} />)}
            </div>
           )
    }
    return <h1 style={{paddingTop: '70px'}}>Not found</h1>
    
}

export default MovieCards;