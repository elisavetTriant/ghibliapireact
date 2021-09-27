import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { searchMovies, requestMovies, requestMovie, requestMovieVideos, assignModal} from './StateContainer/reducers'
import './index.css';
import Home from './containers/Home';
import Movie from './containers/Movie';
//import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const rootReducers = combineReducers({requestMovies, requestMovie, requestMovieVideos, searchMovies, assignModal});
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));
//const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));


ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
		<Switch>
             <Route exact path="/" component={Home} />
             <Route path="/movie/:id" component={Movie} />
        </Switch>
		</HashRouter>
	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
