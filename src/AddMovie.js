import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleAddMovie = () => {
    //Validate input before adding the movie
    if (newMovie.title && newMovie.rating) {
      onAddMovie(newMovie);
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    } else {
      alert('Please fill all the fields for the new movie.');
    }
  };

  return (
    <div className="add-movie">
      <h3>Add New Movie</h3>
      <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleInputChange} />
      <input type="text" name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleInputChange} />
      <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleInputChange} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;