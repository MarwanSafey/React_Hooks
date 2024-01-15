import React, { useState } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Movies from './Movies';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState(Movies);

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div>
      <AddMovie onAddMovie={addMovie} />
      <br></br>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
