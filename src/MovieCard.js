import React from 'react';

const MovieCard = ({ posterURL , title , description , rating}) => {
 return (
    <div className="movie-card">
      <img className="img" src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
 );
};

export default MovieCard;
