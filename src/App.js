import React, { useState } from 'react';
import './App.css';
import Container from './Container';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const onSearch = (e) => {
    e.preventDefault();
    document.querySelector('input').blur();
    setLoading(true);
    fetch(`https://omdbapi.com/?apikey=61fddd85&s=${input}`)
    .then(res => res.json())
    .then(data => {
      if (data.Error){
        this.setState({result : data})
      }
      else {
        setResult(data.Search)
        setSearchText(input)
      }
    })
    .catch(err => console.log('oops', err))
    .finally(() => setLoading(false))
  }
  return (
    <div className="App">
      <Container onInputChange={e => setInput(e.target.value)} onSearch={onSearch} result={result} searchText={searchText} loading={loading}/>
    </div>
  );

}

export default App;
