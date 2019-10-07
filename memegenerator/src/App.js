import React,{Component} from 'react';
import './App.css';

class App extends Component {
 constructor(){
   super()
   this.state={
     loading:false,
     character:{}
   }
 }


componentDidMount(){
  this.setState({loading: true})
  fetch("https://swapi.co/api/people/1")
  .then(response =>response.json())
  .then(data =>{
    this.setState({
      character:data
    })
   })

}

 render(){
   const text = this.state.loading? "loading": this.state.character.name;
   const data = this.state.character.name;
   const name= data?data:text
   return(
     <div>{name}</div>
    //  <div>{this.state.character.name}</div>
   )
 }
}

export default App;
