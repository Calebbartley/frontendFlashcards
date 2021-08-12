import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
// import Deck from './Deck/deck';
import Cards from './Cards/cards'
import axios from 'axios';


class App extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            cards: [{
                id:1,
                title:"",
                definition:"",
            }],
            deck: [{
              id:1,
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
          let response = await axios.get("http://localhost:5000/api/cards");
          console.log(response.data);
          this.setState({
            cards: response.data,
          });
        } catch (ex) {
          console.log(`error in api call`);
        }
      }

      render() {
        const cardCycle = this.state.cardCycle

        return(
            <div className="App">
              <h1> Cards </h1>
              <form>
                <TitleBar/>
                <input
                className="input" value={cardCycle} onChange={this.handleChange}
                />
                <Cards card={this.state.cards}/>
                <ul>
                  { this.state.deck.filter((card) => card.flashCards === this.state.cardCycle).map((card) => <li key={card.id}><strong>Category: </strong>{card.Category}<strong>Flash Cards: </strong>{card.flashCards}</li>) }
                  { this.state.deck.filter((card) => card.category === this.state.cardCycle).map((card) => <li key={card.id}><strong>Category: </strong> {card.Category}<strong>Flash Cards: </strong>{card.flashCards}</li>)}

                </ul>
              <cards/>
              </form>
            </div>
        )
              }
            }
            
            export default App;

            // { this.state.deck.filter((deck) => deck.category === this.state.cardCycle).map((deck) => <li key={deck.id}><strong>Category: </strong> {deck.Category}<strong>Flash Cards: </strong>{deck.flashCards}</li>)}
            // { this.state.deck.filter((deck) => deck.flashCards === this.state.cardCycle).map((deck) => <li key={deck.id}><strong>Category: </strong>{deck.Category}<strong>Flash Cards: </strong>{deck.flashCards}</li>) }
            // <Deck deck={this.state.deck}/>

