import React from 'react';
import MovieCard from './MovieCard';

const MovieCards = ({data, singleMovie, searchText, loading}) => {
    if(loading){
        return <div className="loader"></div>
    }
    if(data.Error){
       return <h3 style={{paddingTop: '100px'}}>{data.Error}</h3> 
    }
    else if(data.length > 0){
        return (
            <div style={{paddingTop: '70px'}}>
                <p>Showing results for "{searchText}"</p>
                 {data.map(movie => <MovieCard singleMovie={singleMovie} key={movie.imdbID} movie={movie} />)}
            </div>
           )
    }
    return <p></p>
}

export default MovieCards;