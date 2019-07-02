import React, { Component } from 'react';
import './App.css';
import Container from './Container';


class App extends Component {
  constructor(){
    super()
    this.state = {
      input : '',
      result : [],
      searchText : null,
      loading: false
    }
  }
  onInputChange = (e) => {
    this.setState({input : e.target.value})
  }
  onSearch = (e) => {
    e.preventDefault();
    this.setState({loading : true});
    fetch(`https://omdbapi.com/?apikey=61fddd85&s=${this.state.input}`)
            .then(res => res.json())
            .then(data => {
              if (data.Error){
                this.setState({result : data})
              }
              else {
                this.setState({result : data.Search, searchText : this.state.input, loading : false})
              }
            })
            .catch(err => console.log('oops', err))
  }
  render() {
    return (
      <div className="App">
        <Container onInputChange={this.onInputChange} onSearch={this.onSearch} result={this.state.result} searchText={this.state.searchText} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
