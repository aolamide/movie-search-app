import React from 'react';
import MovieCards from './MovieCards';
import MovieInfo from './MovieInfo';
import Form from './Form';
import Header from './Header';

class  Container extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            route : 'moviecards',
            movieinfo : []
        }

    }
    singleMovie = (id) => {
        fetch(`https://omdbapi.com/?apikey=61fddd85&i=${id}&plot=full`)
            .then(res => res.json())
            .then(data => this.setState({movieinfo : data}))
            .then(this.setState({route : 'singlemovie'}))
            .catch(err => console.log('oops', err))
    }

    changeRoute = () => {
        this.setState({route : 'moviecards'});
        this.setState({movieinfo : []})
    }
    render(){
      return(
         this.state.route === 'moviecards' ? 
         <div>
            <div className="app-head">
                <Header />
                <Form onInputChange={this.props.onInputChange} onSearch={this.props.onSearch}/>
            </div>
            <div className="app-body">
                <MovieCards singleMovie={this.singleMovie} data={this.props.result} />  
            </div>
           
         </div>
          :
         <MovieInfo changeRoute={this.changeRoute} movieInfo={this.state.movieinfo} />
      )
      

    }
    
}

export default Container;