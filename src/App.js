import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  filterMonsters = monster => {
    return typeof monster.name === 'string' && monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  }

  render(){
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={this.state.monsters.filter(this.filterMonsters)}/>
      </div>
    );
  }
}

export default App;
