import 'whatwg-fetch'

class Movie {
  constructor() {
    this.url = 'http://www.omdbapi.com/?'
  }

  search(text,page = 1) {
    return fetch(`${this.url}s=${text}&page=${page}&r=json`)
      .then(response => response.json())
      .then(data => data)
  }

  get(movieId) {
    return fetch(`${this.url}i=${movieId}&plot=full&r=json`)
      .then(response => response.json())
      .then(data => data)
  }
}

export default Movie