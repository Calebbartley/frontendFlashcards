import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';

class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            flashCards: [{
                id:'',
                title:'',
                definition:''
            }]
        }
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
            flasgCards: response.data,
          });
        } catch (ex) {
          console.log(`error in api call`);
        }
      }

      render() {
          return(
              <div className="App">
                <form>
                  
                </form>
              </div>
          )
      }
}

export default App;