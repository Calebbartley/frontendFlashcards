import React from 'react';
import axios from 'axios'



export default class Deck extends React.Component{
    state = {
        deck: [{
            category:'',
            flashCards:''

        }]
    }

    componentDidMount(){

          axios.get(`http://localhost:5000/api/decks`)
            .then(res =>{
              console.log(res)
              this.setState({deck: res.data})
          })
    }

    render() {
        const deckCat = this.state.deck.map(deck => deck.category)
        const deckFlash = this.state.deck.map(deck => deck.flashCards)
        return(
            <div>
                <div class="card border-dark mb-3">
                    <div class="card-header">{deckCat}</div>
                    <div class="card-body text-dark">
                        <h5 class="card-title">{deckFlash}</h5>
                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>

        )
    }
}




