import React,{ Component } from 'react'
import Pagination from 'react-js-pagination'
import Movie from '../../services/movie'
import Search from '../../components/search/search'
import { MovieList } from '../../components/movie'

class MovieWrapper extends Component {
  constructor(){
    super()
    this.state = { text : '', movies: [], totalMovies : 0, page: 1}
    this.movie = new Movie()
    this.handleSearch = this.handleSearch.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handleSearch(text) {
    this.updateState(text)

    if (text !== '') {
      this.movie.search(text)
        .then(data => {
          if (data.Response === 'True') {
            this.updateState(text,data.Search,parseInt(data.totalResults,10))
          }
        })
    }
  }

  handlePageChange(pageNumber) {
    this.movie.search(this.state.text,pageNumber)
      .then((data) => {
        const copy = Object.assign({},this.state,{page: pageNumber, movies: data.Search})
        this.setState(copy);
      })
  }

  updateState(text = '',movies = [],totalMovies = 0,page = 1) {
    const copy = Object.assign({},this.state,{text,movies,totalMovies,page})
    this.setState(copy)
  }

  render() {
    return (
      <div>
        <Search
          text={this.state.text}
          onHandleSearch={this.handleSearch}></Search>
        <MovieList
          text={this.state.text}
          movies={this.state.movies}
          total={this.state.totalMovies}></MovieList>
        <Pagination
          className="pagination"
          activePage={this.state.page}
          itemsCountPerPage={10}
          totalItemsCount={this.state.totalMovies}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}></Pagination>
      </div>
    )
  }
}

export default MovieWrapper