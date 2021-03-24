import React, { Component } from 'react';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { requestMovie } from '../StateContainer/actions';
import Video from '../components/Video';
import CharacterCard from '../components/CharacterCard';
import logo from '../logo.png';
import videos from '../filmVideos.js';


const getFilmCharacters = (people, current_video_url) => {

  let filmCharacters = []

  people.forEach(function (character){ 
      character.films.forEach(function (film){ 
      if (film === current_video_url) {
        filmCharacters.push(character);
      }
    })
  });

  console.log(filmCharacters);
  return filmCharacters;

}


// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    movie: state.requestMovie.movie,
    isPending: state.requestMovie.isPending,
  }
}

// Dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// The function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMovie: (id) => dispatch(requestMovie(id)),
  }
}

class Movie extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.onRequestMovie(id);
  }

  componentDidUpdate(prevProps) {
      if (prevProps.isPending !== this.props.isPending){
        if (!this.props.isPending) {
          if (this.props.movie.relatedData.people.length >  0) {
            console.log("We have people")
          }
       }
      }
    }

  render() {
    
    let { movie, isPending } = this.props;
    let { release_date, title, description, producer, director, rt_score, url} = movie;
    
    let filteredMovie = videos.filter( video => {
      return title === video.name ;
    });

    return isPending ?
      <h1>Loading</h1> :
      (
        <div>
          <Link to={`/`}><img src={logo} className="app-logo" alt="Studio Ghibli Logo" /></Link>
          <h1>{title}</h1>
          {(filteredMovie.length > 0)?
            (<Video video_id={filteredMovie[0].videoID}/>)
          :
          ''}
          <div className="container mtb-20">
             <div className="card pd-20">
                <h2>Description</h2>
                {description}
              </div>
              <div className="card pd-20">
                <h2>General Information</h2>
                <dl>
                   <dt>Release Date</dt><dd>{release_date}</dd>
                   <dt>Producer</dt><dd>{producer}</dd>
                   <dt>Director</dt><dd>{director}</dd>
                   <dt>Rotten Tomato score</dt><dd>{rt_score}</dd>
                 </dl>              
              </div>
          </div>
          {(this.props.movie.relatedData.people.length > 0)?
          (<div className="container mtb-20">
            <div className="card pd-20">
            <h2>Listed Characters</h2>

              {
                    getFilmCharacters(this.props.movie.relatedData.people, url).map((character, i) => {
                       return (
                          <CharacterCard
                            key={i}
                            id={character.id}
                            name={character.name}
                            gender={character.gender}
                            eye_color={character.eye_color}
                            hair_color={character.hair_color}
                            species={character.species}
                            />
                    )
                     })
              }
              </div>
            </div>
            ): null }
          <div className="containerCenter mtb-20">
           <Link className="button_link" to={`/`}>Back</Link>
          </div>
          <Footer />
        </div>
      );
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);