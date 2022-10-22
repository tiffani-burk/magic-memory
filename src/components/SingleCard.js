import './SingleCard.css'

export const SingleCard = ({ card }) => {
    return (
        <div className='card'>
            <div>
            {/* create a dynamic image for the front of card */}
            <img className='front' src={card.src} alt='card front' /> 
            <img className='back' src='img/CardBackground.png' alt='card back' />
            </div>
    </div>
    )
}

// to access card.src, we have to destructure the card on App.js and send a prop over to this file