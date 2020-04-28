import React, { Component } from 'react';
import './App.css';
import BagelListComponent from './components/BagelListContainer'
import Favorites from './Favorites';


class App extends Component {

  state = {
    bagels: []
  }
  componentDidMount(){
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
    .then(response => response.json())
    .then(bagelList => this.setState({bagels: bagelList}))
  }

  addToFavorites = () => {
    this.setState()
  }


  render(){
  return (
    <div className="App">
      <h1>All the Bagels!</h1>
      <Favorites />
      <BagelListComponent bagels={this.state.bagels}/>
    </div>
  );
  }
}

export default App;
