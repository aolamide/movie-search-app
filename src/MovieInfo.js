import React from 'react';
import errorImage from './no-image.gif';
import './movieinfo.css';

const MovieInfo = ({ movieInfo, changeRoute }) => {
    const { Title, Poster, Rated, Released, Runtime, Actors, Plot,imdbRating : Rating, BoxOffice, Production, Type, Genre, Writer, Language, Country, Ratings } = movieInfo;
    return(
        Title ? 
        <div className="infoPage">
            <button onClick={changeRoute} style={{position: 'fixed', top: '5px', left : '5px', backgroundColor: 'orange', padding: '5px', borderRadius : '50%', width: '25px'}}><i className="fa fa-arrow-left"></i></button>
                <div className="main">
                    <img className="poster" src={Poster === 'N/A' ? errorImage : Poster} alt='poster' />
                    <div className="info">
                        <h3>{ Title }</h3>
                        <p>{`Type : ${Type || "N/A"}`}</p>
                        <p>{`Genre : ${Genre || "N/A"}`}</p>
                        <p>{`Released : ${Released || "N/A"}`}</p>
                        <p>{`Runtime : ${Runtime || "N/A"}`}</p>
                        <p>{`Rated ${Rated || "N/A"}`}</p>
                    </div>
                </div>
                <div>
                    <p>{Plot}</p>
                </div>
                <div className="moreInfo">
                    <p>{`Actors : ${Actors || "N/A"}`}</p>
                    <p>{`Writer : ${Writer || "N/A"}`}</p>
                    <p>{`Language : ${Language || "N/A"}`}</p>
                    <p>{`Country : ${Country || "N/A"}`}</p>
                    <p>{`imdbRating  : ${Rating || "N/A"}`}</p>
                    <fieldset>
                        <legend>OTHER RATINGS:</legend>
                        {Ratings.map(rating => <p>{`${rating.Source} : ${Rating.Value || "N/A"}`}</p>)}   
                    </fieldset>
                    <p>{`Production  : ${Production || "N/A"}`}</p>
                    <p>{`Box Office :  ${BoxOffice || "N/A"}`}</p>
                </div>   
        </div>
        :
        <div className="loader"></div>
    )
}

export default MovieInfo;