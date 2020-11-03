import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response=> response.json())
      .then(ghiblifilms => {this.setState({ films: ghiblifilms})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    
    const { films, searchfield } = this.state;
    const filteredFilms = films.filter(film =>{
      return film.title.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !films.length ?
      <h1>Loading</h1> :
      (
        <div>
          <img src="./logo.png" className="app-logo" alt="Studio Ghibli Logo" />
          <h1>Studio Ghibli Api - React App</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList films={filteredFilms} />
        </div>
      );
  }
}

export default App;