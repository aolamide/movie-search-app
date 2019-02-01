import React from 'react';
import errorImage from './no-image.gif';

const MovieInfo = ({ movieInfo, changeRoute }) => {
    const { Title, Poster, Rated, Released, Runtime, Actors, Plot,imdbRating : Rating, BoxOffice, Production } = movieInfo;
    return(
        <div>
            <button onClick={changeRoute} style={{position: 'fixed', top: '5px', left : '5px'}}>{'<--'}</button>
            
            <fieldset>
                <legend><h1>{Title}</h1></legend>
                <img src={Poster === 'N/A' ? errorImage : Poster} alt='poster' />
                <p>{`Rated ${Rated}`}</p>
                <p>{`Released : ${Released}`}</p>
                <p>{`Runtime : ${Runtime}`}</p>
                <p>{`Actors : ${Actors}`}</p>
                <p>{`Plot  : ${Plot}`}</p>
                <p>{`imdbRating  : ${Rating}`}</p>
                <p>{`Production  : ${Production}`}</p>
                <p>{`Box Office :  ${BoxOffice}`}</p>
            </fieldset> 
        </div>
    )
}

export default MovieInfo;