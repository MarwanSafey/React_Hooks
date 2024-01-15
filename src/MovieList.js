import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Movies from './Movies';
import Filter from './Filter';

const MovieList = () => {
  const [filteredMovies, setFilteredMovies] = useState(Movies);

  
  const handleTitleChange = (title) => {
    filterMovies(title);
  };

  
  const filterMovies = (title) => {
    const filtered = Movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <Filter onTitleChange={handleTitleChange} />
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;