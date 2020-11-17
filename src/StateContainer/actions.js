import {
  CHANGE_SEARCHFIELD,
  REQUEST_MOVIES_PENDING,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_FAILED,
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_SET_VIDEO
 } from './constants';


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const closeModal = () => ({ type: MODAL_CLOSE })

export const openModal = () => ({ type: MODAL_OPEN })

export const setVideoID = (videoID) => ({ type: MODAL_SET_VIDEO, payload: videoID })


export const requestMovies = () => (dispatch) => {
  dispatch({ type: REQUEST_MOVIES_PENDING })
   fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_MOVIES_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_MOVIES_FAILED, payload: error }))
}