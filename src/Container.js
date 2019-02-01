import React from 'react';
import MovieCards from './MovieCards';
import MovieInfo from './MovieInfo';
import Form from './Form';

class  Container extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            route : 'moviecards',
            movieinfo : []
        }

    }
    singleMovie = (id) => {
        this.setState({route : 'singlemovie'})
        fetch(`https://omdbapi.com/?apikey=61fddd85&i=${id}&plot=full`)
            .then(res => res.json())
            .then(data => this.setState({movieinfo : data}))
            .catch(err => console.log('oops', err))
    }

    changeRoute = () => {
        this.setState({route : 'moviecards'})
    }
    render(){
      return(
         this.state.route === 'moviecards' ? 
         <div>
            <Form  onInputChange={this.props.onInputChange} onSearch={this.props.onSearch}/>
            <MovieCards singleMovie={this.singleMovie} data={this.props.result} />
         </div>
          : 
         <MovieInfo changeRoute={this.changeRoute} movieInfo={this.state.movieinfo} />
      )
      

    }
    
}

export default Container;