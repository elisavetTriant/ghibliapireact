import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import { setSearchField, requestMovies, requestMovieVideos, closeModal, openModal, setVideoID } from '../StateContainer/actions';
import logo from '../logo.png';


// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchMovies.searchField,
    movies: state.requestMovies.movies,
    isPending: state.requestMovies.isPending,
    movieVideos: state.requestMovieVideos.movieVideos,
    isPendingVideos: state.requestMovieVideos.isPendingVideos,
    videoID:  state.assignModal.videoID,
    isOpen: state.assignModal.isOpen
  }
}

// Dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// The function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMovies: () => dispatch(requestMovies()),
    onRequestMovieVideos: () => dispatch(requestMovieVideos()),
    closeModal : () => dispatch(closeModal()),
    openModal : () => dispatch(openModal()),
    setVideoID : (event) => dispatch(setVideoID(event.target.id))
  }
}

class Home extends Component {

  componentDidMount() {
    this.props.onRequestMovies();
    this.props.onRequestMovieVideos();
  }

  onShowVideo = (event) => {
    event.preventDefault();
     this.props.setVideoID(event)
     this.props.openModal();
  }

  render() {
    
    const { movies, isPending, movieVideos, isPendingVideos, searchField, onSearchChange, videoID } = this.props;
    const filteredMovies = movies.filter(movie =>{
      return movie.title.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending && isPendingVideos && !movies.legth && !movieVideos.legth ?
      <h1>Loading</h1> :
      (
        <div>
          <img src={logo} className="app-logo" alt="Studio Ghibli Logo" />
          <h1>Studio Ghibli Films</h1>
          <SearchBox searchChange={onSearchChange} />
          <CardList films={filteredMovies} videos={movieVideos} onShowVideo={this.onShowVideo} />
          <Footer />
          <Modal video_id={videoID} is_open={this.props.isOpen} onClose={this.props.closeModal}/>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);