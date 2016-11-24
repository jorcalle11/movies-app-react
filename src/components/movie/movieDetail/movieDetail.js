import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import Movie from '../../../services/movie.js'
import './movieDetail.css'

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {movie : null}
    this.movie = new Movie()
    this.movieDetail = null
  }

  
  componentWillMount() {
    const {movieId} = this.props.params
    this.movie.get(movieId)
      .then(data => this.setState({movie: data}))
  }

  render() {
    const {movie} = this.state

    if (movie === null) {
      return (
        <div className="alert">
          Cargando...
        </div>
      )
    }

    const poster = !movie.Poster.includes('http') ?
      <div className="notImage"></div> :
      <img src={movie.Poster} alt={movie.Title} title={movie.Title}/>

    return (
      <section className="movieDetail">
        <figure>
          {poster}
        </figure>
        <main className="description">
          <h2>{movie.Title}</h2>
          <ul>
            <li><strong>Tipo: </strong>{movie.Type}</li>
            <li><strong>Fecha de estreno: </strong>{movie.Released}</li>
            <li><strong>Año: </strong>{movie.Year}</li>
            <li><strong>Duración: </strong>{movie.Runtime}</li>
            <li><strong>País: </strong>{movie.Country}</li>
            <li><strong>Director: </strong>{movie.Director}</li>
            <li><strong>Guión: </strong>{movie.Writer}</li>
            <li><strong>Reparto: </strong>{movie.Actors}</li>
            <li><strong>Género: </strong>{movie.Genre}</li>
            <li><strong>Idioma: </strong>{movie.Language}</li>
            <li><strong>Premios: </strong>{movie.Awards}</li>
          </ul>
          <div>
            <h4>Sinopsis</h4>
            <p>{movie.Plot}</p>
          </div>
          <a href="#" onClick={browserHistory.goBack}>Regresar</a>
        </main>
      </section>
    )
  }
}

export default MovieDetail;