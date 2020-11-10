import React from 'react'

import {Cardlist} from './components/card-list-component/card-list-component';

import {Search} from './components/search/search';

import './App.css';



class App extends React.Component {
  constructor(){
  super();
  
  
  this.state={
    monsters:[],
    searchfeild:''

  };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({monsters:users}));
    //.then(users=>console.log(users.name))
}
  render(){
    const {monsters,searchfeild} = this.state;
    // const monsters = this.state.monsters;
    // const searchfeild=this.state.searchfeild;

    const filteredmonsters = monsters.filter(mons=>mons.name.toLowerCase().includes(searchfeild.toLowerCase()))
  return (
    <div className="App">
     <h1 className="monster">Monster Roldex </h1>

      <Search placeholder='search Monster' handler={e=>this.setState({searchfeild:e.target.value})}/>
      
      <Cardlist monsters={filteredmonsters}/>
      
      {/* now this card list will act as parameters to the parent one the one with all the css and files */}
      {/* so map functions works like a for each loop it calls the function for 
      every value in the array  */}


    </div>
  );
}
}

export default App;
