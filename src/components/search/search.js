import React, {Component} from 'react'
import './search.css'

class Search extends Component {

  handleChange(e){
    this.props.onHandleSearch(e.target.value)
  }

  render() {
    const text = this.props.text
    return (
      <form name="searchMovieForm">
        <input
          type="text"
          name="search"
          placeholder="Ej: wwe"
          value={text}
          onChange={this.handleChange.bind(this)} />
      </form>
    );
  }
}

export default Search;