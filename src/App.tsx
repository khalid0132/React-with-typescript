import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([

    {
      name: "Leonel Messi",
      age: 28,
      url: "https://imgs.aftonbladet-cdn.se/v2/images/3bad1034-be3a-4726-9b8f-5efaaca9693a?fit=crop&h=1267&q=50&w=1900&s=4a31f289637beb174d643a837dd6043d155d1ecb",
      note: "Super player, try to attach in the team"
    
    },
    {
      name: "Jack Kallis",
      age: 46,
      url: "http://starsunfolded.com/wp-content/uploads/2018/02/JacquesKallis-07.jpg",
      note: "Super team mate, so he may join"
    
    },
    {
      name: "Sachin Tendulkar",
      age: 42,
      url: "https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg",
      note: "Great Cricketer. Welcome to join"
    
    }
  ]);
  
  // people.map((person) => {
  //   person.name
  // })

  return (
    <div className="App">
      <h1>People invited to my Team</h1>
      <List people = {people}></List>
      <AddToList people = {people} setPeople={setPeople}></AddToList>
      
    </div>
  );
}

export default App;
