import './SingleCard.css'

export const SingleCard = ({ card, handleChoice }) => {

    // this function will update the state of the choiceOne or choiceTwo,
    // however, this function cant do that because the states exist in App.js, so create a functio in there, pass it as a prop and and call it in here. 
    const handleClick = () => {
        handleChoice(card)
    }
    return (
        <div className='card'>
            <div>
            {/* create a dynamic image for the front of card */}
            <img className='front' src={card.src} alt='card front' /> 
            <img className='back' src='img/CardBackground.png' alt='card back' onClick={handleClick} />
            </div>
    </div>
    )
}

// to access card.src, we have to destructure the card on App.js and send a prop over to this file
// create an onClick on the back of the card and set it to a function
// create a function called handleClick insdie the SingleCard component 