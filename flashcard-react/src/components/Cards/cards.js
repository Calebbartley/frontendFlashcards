import React from 'react';
import axios from 'axios'



export default class Cards extends React.Component{
    state = {
        cards: []
    }

    componentDidMount(){

          axios.get(`http://localhost:5000/api/cards`).then(res =>{
              console.log(res)
              this.setState({cards: res.data})
          })
    } 

    render() {
        return(
            <ul>
            {this.state.cards.map(cards => <li>{cards.id}</li>)}
            </ul>
        )
    }
}


// const Cards = (props) => {
//     return(
//         <div>
//             {props.cards.map((card, index) => (
//                 <span>
//                     <h1>Title: {card.title}</h1>
//                     <h1>Definition: {card.definition}</h1>

//                 </span>
//             ))}
//         </div>
//     );
// }

// export default Cards;