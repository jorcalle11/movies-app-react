import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './containers/app/App'
import MovieWrapper from './containers/movieWrapper/movieWrapper'
import { MovieDetail } from './components/movie'
import NotFound from './components/notFound/notFound'
import './index.css';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MovieWrapper}></IndexRoute>
      <Route path="movies/:movieId" component={MovieDetail}></Route>
    </Route>
    <Route path="*" component={NotFound}></Route>
  </Router>
)

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
