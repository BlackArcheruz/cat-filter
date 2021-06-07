import React, {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/CardList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cats: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users=> this.setState({cats: users}));
  }
  render(){
    return (
      <div className="app">
        <input type="search" placeholder="search cats" onChange={e => this.setState({searchField: e.target.value}, ()=>console.log(this.state.searchField))}/>
          <CardList cats={this.state.cats}/>
      </div>
    );
  }
}

export default App;
