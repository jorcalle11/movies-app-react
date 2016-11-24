import React, {PropTypes} from 'react'
import './movieList.css'
import MovieItem from '../movieItem/movieItem'

const MovieList = props => {
  const movies = props.movies
  if (props.text === '' && !movies.length) {
    return (
      <div className="alert">
        Escribe una palabra clave para comenzar a buscar...
      </div>
    )
  }
  
  if (props.text !== '' && !movies.length) {
    return (
      <div className="alert">
        No se encontraron resultados para <strong>{props.text}</strong>.
      </div>
    )
  }

  return (
    <div>
      <p>Se encontraron <strong>{props.total}</strong> resultados</p>
      <section className="movieList">
        {movies.map(movie => <MovieItem key={movie.imdbID} movie={movie}></MovieItem>)}
      </section>
    </div>
  );

};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

export default MovieList;