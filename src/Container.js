import React, { useState } from 'react';
import MovieCards from './MovieCards';
import MovieInfo from './MovieInfo';
import Form from './Form';
import Header from './Header';


const Container = ({ onInputChange, onSearch, result, loading, searchText }) => {
    const [movieinfo, setMovieInfo] = useState([]);
    const [route, setRoute] = useState('moviecards');

    const singleMovie = (id) => {
        fetch(`https://omdbapi.com/?apikey=61fddd85&i=${id}&plot=full`)
        .then(res => res.json())
        .then(data => setMovieInfo(data))
        .then(() => setRoute('singlemovie'))
        .catch(err => console.log('oops', err))
    }
    const changeRoute = () => {
        setRoute('moviecards');
        setMovieInfo([])
    }
    return(
        route === 'moviecards' ? 
        <div>
           <div className="app-head">
               <Header />
               <Form onInputChange={onInputChange} onSearch={onSearch}/>
           </div>
           <div className="app-body">
               <MovieCards singleMovie={singleMovie} data={result} searchText={searchText} loading={loading} />  
           </div>
          
        </div>
         :
        <MovieInfo changeRoute={changeRoute} movieInfo={movieinfo} />
     )
}

export default Container;