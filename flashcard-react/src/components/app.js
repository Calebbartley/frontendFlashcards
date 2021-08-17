import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import Deck from './Deck/deck';
// import Cards from './card/Card'
import axios from 'axios';


class App extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            cards: [{
                id:'',
                title:"",
                definition:"",
            }],
            deck: [{
              id:0,
              category:"",
              flashCards: "",
            }],
            cardCycle:"",
        }
    }


    handleChange(e){
      this.setState ({
        cardCycle: e.target.value
      });
      console.log(this.state.cardCycle)
    }


    componentDidMount() {
        this.makeGetRequest();
        console.log("mounted");
      }

      async makeGetRequest() {
        try {
          let response = await axios.get("http://localhost:5000/api/decks");
          console.log(response.data);
          this.setState({
            decks: response.data,
          });
        } catch (ex) {
          console.log(`error in api call`);
        }
      }

      render() {
        const cardCycle = this.state.cardCycle

        return(
            <div className="App">
              <h1> Decks </h1>

              <div>
                <TitleBar/>
                  { this.state.deck.filter((deck) => deck.category === this.state.cardCycle).map((deck) => <ol key={deck.id}> {deck.category } {deck.flashCards}</ol>)}
                  { this.state.deck.filter((deck) => deck.flashCards === this.state.cardCycle).map((deck) => <ol key={deck.id}><p>{deck.category }</p> <p>{deck.flashCards}</p></ol>)}
                <Deck deck={this.state.deck}/>
                  {this.state.cards.filter((Cards) => Cards.title === this.state.cards).map((cards) => <li key={cards.id}>{cards.title}{cards.flashCards}</li>)}
                  {this.state.cards.filter((Cards) => Cards.definition === this.state.cards).map((cards) => <li key={cards.id}>{cards.definition}{cards.flashCards}</li>)}
                <input className="input" value={cardCycle} onChange={this.handleChange}/>
              </div>



             </div>



        )
      }


}

            export default App;


            // { this.state.cards.filter((Cards) => Cards.title === this.state.cards).map((cards) => <li key={cards.id}><strong>Category: </strong>{cards.title}<strong>Flash Cards: </strong>{cards.flashCards}</li>) }
            // { this.state.cards.filter((Cards) => Cards.definition === this.state.cards).map((cards) => <li key={cards.id}><strong>Category: </strong> {cards.definition}<strong>Flash Cards: </strong>{cards.flashCards}</li>)}
//  <Cards/>