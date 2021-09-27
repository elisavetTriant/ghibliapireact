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


const fetchRelatedVideoData = (location_url,  species_url, vehicles_url, people_url) => {
  let allRequests = []

    allRequests[0] = fetch(location_url)
    .then(response=> response.json())
    .catch(error => console.log(error))

    allRequests[1] = fetch(species_url)
    .then(response=> response.json())
    .catch(error => console.log(error))

    allRequests[2] = fetch(vehicles_url)
    .then(response=> response.json())
    .catch(error => console.log(error))

    allRequests[3] = fetch(people_url)
    .then(response=> response.json())
    .catch(error => console.log(error))      

  return Promise.all(allRequests);
};


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const closeModal = () => ({ type: MODAL_CLOSE })

export const openModal = () => ({ type: MODAL_OPEN })

export const setVideoID = (videoID) => ({ type: MODAL_SET_VIDEO, payload: videoID })


export const requestMovieVideos = () => (dispatch) => {
  dispatch({ type: REQUEST_MOVIE_VIDEOS_PENDING })
   fetch('https://ghibli-sample-api.herokuapp.com/api/movies')
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_MOVIE_VIDEOS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_MOVIE_VIDEOS_FAILED, payload: error }))
}

export const requestMovies = () => (dispatch) => {
  dispatch({ type: REQUEST_MOVIES_PENDING })
   fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_MOVIES_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_MOVIES_FAILED, payload: error }))
}

export const requestMovie = (videoID) => (dispatch) => {

  dispatch({ type: REQUEST_MOVIE_PENDING })
   fetch('https://ghibliapi.herokuapp.com/films/'+videoID)
    .then(response=> response.json())
    .then(responseData => {
      let relatedResponses  =  {};
      const location_url = responseData.locations[0];
      const people_url = responseData.people[0];
      const species_url = responseData.species[0];
      const vehicles_url = responseData.vehicles[0];
      
      fetchRelatedVideoData(location_url,  species_url, vehicles_url, people_url)
      .then(arrayOfResponses => {
        Object.assign(relatedResponses, {locations: arrayOfResponses[0]})
        Object.assign(relatedResponses, {species: arrayOfResponses[1]})
        Object.assign(relatedResponses, {vehicles: arrayOfResponses[2]})
        Object.assign(relatedResponses, {people: arrayOfResponses[3]})
        dispatch({ type: REQUEST_MOVIE_SUCCESS, payload: Object.assign({}, responseData, {relatedData:relatedResponses}) })

      })
      .catch(error => dispatch({ type: REQUEST_MOVIE_FAILED, payload: error }))
    })
   .catch(error => dispatch({ type: REQUEST_MOVIE_FAILED, payload: error }))
}