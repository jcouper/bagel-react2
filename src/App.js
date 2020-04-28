import React, { Component } from 'react';
import './App.css';
import BagelListComponent from './components/BagelListContainer'
import Favorites from './Favorites';


class App extends Component {

  state = {
    bagels: [],
    favorites: []
  }
  componentDidMount(){
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
    .then(response => response.json())
    .then(bagelList => this.setState({bagels: bagelList}))
  }

  addToFavorites = (bagel) => {
    this.setState({favorites: [...this.state.favorites,bagel]})
  }


  render(){
  return (
    <div className="App">
      <h1>Favs</h1>
      <Favorites favorites={this.state.favorites} />
      <h1>List of Bagels</h1>
      <BagelListComponent bagels={this.state.bagels} addToFavorites={this.addToFavorites}/>
    </div>
  );
  }
}

export default App;
