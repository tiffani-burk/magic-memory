import { useEffect, useState } from 'react';
import './App.css';
import { SingleCard } from './components/SingleCard';

//create an array of the images 
const cardImages = [
  { 'src': 'img/cauldron.png' },
  { 'src': 'img/bat.png' },
  { 'src': 'img/ghost.png' },
  { 'src': 'img/owl.png' },
  { 'src': 'img/poison.png' },
  { 'src': 'img/pumpkin.png' }
]



function App() {
  //useState
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //shuffle cards
  //create function to duplicate the cardImages array and add to new array
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] //spread operator copies the array 
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }
//this function will take the card the user has chosen as an argument
// Pass this function as a prop to SingleCard
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare the two selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo) {

      if(choiceOne.src === choiceTwo.src) {
        console.log('It is a match')
        resetTurn()
      }
        else {
          console.log('Those cards do not match')
          resetTurn()
        }
    }
  }, 
  [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className='App'>
      <h2> Magic Memory</h2>
      <h6 className='subTitle'>A game to test your memory...</h6>
      <button onClick={shuffleCards}>New Game</button>

      <div className='game-center'>
        <div className='card-grid'>
          {cards.map(card => (
            <div className='card' key={card.id}>
              <SingleCard 
              key={card.id} 
              card={card}
              handleChoice={handleChoice}
              />
            </div>


          ))}
        </div>

      </div>
    </div>
  );
}

export default App;

// We send the {card} over to SingleCard.js in a prop
// The user has two select two cards, so create a useState to handle the states of those choices
