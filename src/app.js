import React, { Component } from 'react';
import axios from 'axios';


class App extends Component{
    constructor(props){
        super(props);
        this.handleChange= this.handleChange,bind(this);
        this.state ={
            studyCards:[{
                id:1,
                title:'',
                album:'',
                artist: '',
                genre:'',
                releaseDate:'',
            }]
        }
    }

    componentDidMount(){
        this.makeGetRequest();
        console.log('mounted');
    }

    async makeGetRequest(){
        try{
            let response = await axios.get();
            console.log(response.data);
            this.setState({studyCards: response.data});
        }catch(ex){
            console.log(`error in api call ${ex}`)
        }
    }

    render(){
        return(
            <div>
                <form>

                </form>
            </div>
        )
    }
}