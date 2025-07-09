import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.imdbID}`} className="movie-card">
    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/160x240'} alt={movie.Title} />
    <div className="movie-title">{movie.Title}</div>
  </Link>
);

export default MovieCard;