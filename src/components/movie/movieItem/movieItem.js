import React from 'react'
import { Link } from 'react-router'
import './movieItem.css'

const MovieItem = (props) => {
  const movie = props.movie
  const poster = !movie.Poster.includes('http') ?
     <div className="notImage"></div> :
     <img src={movie.Poster} alt={movie.Title} title={movie.Title} className="poster"/>

  return(
    <article className="movieItem">
      <figure>
        <Link to={`/movies/${movie.imdbID}`}>
          {poster}
        </Link>
      </figure>
      <div className="description">
        <h4>{movie.Title}</h4>
        <span className={`badge ${movie.Type === 'series'? 'series':'movie'}`}>{movie.Type}</span>
        <p>
          <strong>{movie.Year}</strong>
        </p>
      </div>
    </article>
  )
}
export default MovieItem