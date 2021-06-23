import React, {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cats: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users=> this.setState({cats: users}));
  }
  render(){
    const {cats, searchField} = this.state;
    const filteredCats = cats.filter(cat=>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Cats Filter</h1>
          <SearchBox
          placeholder="search cats"
          handleChange={e => this.setState({searchField: e.target.value})}
          />
          <CardList cats={filteredCats}/>
      </div>
    );
  }
}

export default App;
