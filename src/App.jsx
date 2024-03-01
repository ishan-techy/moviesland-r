import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'https://www.omdbapi.com/?apikey=962b7628';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    searchMovies('Interstellar');

  }, []);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data)
    setMovies(data.Search);

  }
  return (
    <div className="app">
      <h1> MovieLand </h1>
      <div className='search'>
        <input

          placeholder='Search For Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} />

      </div>

      {movies.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (<MovieCard movie={movie} />))}
          </div>
        ) : (
          <div className="empty">
            <h2>no movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
