import { useState } from 'react';
import './App.css';

//create an array of the images 
const cardImages = [
  {'src' : 'images/cauldrin.png'},
  {'src' : 'images/bat.png'},
  {'src' : 'images/ghost.png'},
  {'src' : 'images/owl.png'},
  {'src' : 'images/poison.png'},
  {'src' : 'images/pumpkin.png'} 
]



function App() {
//useState
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)

//shuffle cards
//create function to duplicate the cardImages array and add to new array

const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages] //spread operator copies the array 
  .sort(() => Math.random() - 0.5)
  .map((card) => ({ ...card, id: Math.random()}))

  setCards(shuffledCards)
  setTurns(0)
}

console.log(cards, turns)

  return (
  <div className='App'>
    <h2> Magic Memory</h2>
    <h6 className='subTitle'>A game to test your memory...</h6>
    <button onClick={shuffleCards}>New Game</button>
  
  </div>
  );
}

export default App;
