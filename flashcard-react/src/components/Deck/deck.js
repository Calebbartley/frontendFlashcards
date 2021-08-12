import React from 'react';

const Deck = (props) => {
    return(
        <div>
            {props.deck.map((deck, index)=> (
                <span>
                    <h1>Category: {deck.category}</h1>
                    <h1>Card: {deck.flashCards}</h1>
                </span>
            ))}
        </div>
    )
}

export default Deck;