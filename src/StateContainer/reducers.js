import {
  CHANGE_SEARCHFIELD,
  REQUEST_MOVIES_PENDING,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_FAILED,
  REQUEST_MOVIE_PENDING,
  REQUEST_MOVIE_SUCCESS,
  REQUEST_MOVIE_FAILED,
  REQUEST_MOVIE_VIDEOS_PENDING,
  REQUEST_MOVIE_VIDEOS_SUCCESS,
  REQUEST_MOVIE_VIDEOS_FAILED,
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_SET_VIDEO
 } from './constants';



//reducer for when the user interacts with the search-box
const initialStateSearch = {
  searchField: ''
}

export const searchMovies = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}



//reducer for when the movies are loaded
const initialStateMovies = {
  movies: [],
  isPending: true
}

export const requestMovies = (state=initialStateMovies, action={}) => {
  switch (action.type) {
    case REQUEST_MOVIES_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_MOVIES_SUCCESS:
      return Object.assign({}, state, {movies: action.payload, isPending: false})
    case REQUEST_MOVIES_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

//reducer for when the movies are loaded
const initialStateMovieVideos = {
  movieVideos: [],
  isPendingVideos: true
}

export const requestMovieVideos = (state=initialStateMovieVideos, action={}) => {
  switch (action.type) {
    case REQUEST_MOVIE_VIDEOS_PENDING:
      return Object.assign({}, state, {isPendingVideos: true})
    case REQUEST_MOVIE_VIDEOS_SUCCESS:
      return Object.assign({}, state, {movieVideos: action.payload, isPendingVideos: false})
    case REQUEST_MOVIE_VIDEOS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

//reducer for when the movie
const initialStateMovie = {
  movie: {},
  isPending: true
}

export const requestMovie = (state=initialStateMovie, action={}) => {
  switch (action.type) {
    case REQUEST_MOVIE_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_MOVIE_SUCCESS:
      return Object.assign({}, state, {movie: action.payload, isPending: false})
    case REQUEST_MOVIE_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}


//reducer for when the user interacts with video modal
const initialStateModal = {
  isOpen: false,
  videoID: ''
}

export const assignModal = (state=initialStateModal, action={}) => {
  switch (action.type) {
    case MODAL_OPEN:
      return Object.assign({}, state, {isOpen: true})
    case MODAL_CLOSE:
      return Object.assign({}, state, {isOpen: false})
    case MODAL_SET_VIDEO:
      return Object.assign({}, state,  {videoID: action.payload})
    default:
      return state
  }
}