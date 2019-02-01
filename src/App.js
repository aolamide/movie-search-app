import React, { Component } from 'react';
import './App.css';
import Container from './Container';


class App extends Component {
  constructor(){
    super()
    this.state = {
      input : '',
      result : []

    }
  }
  onInputChange = (e) => {
    this.setState({input : e.target.value})
  }
  onSearch = () => {
    fetch(`https://omdbapi.com/?apikey=61fddd85&s=${this.state.input}`)
            .then(res => res.json())
            .then(data => this.setState({result : data.Search}))
            .catch(err => console.log('oops', err))
  }
  render() {
    return (
      <div className="App">
        <Container onInputChange={this.onInputChange} onSearch={this.onSearch} result={this.state.result} />
      </div>
    );
  }
}

export default App;
