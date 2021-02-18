import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headerbar from './Composants/Headerbar'
import Footerbar from './Composants/Footerbar'
import ListTraining from './Composants/ListTraining'

import Todolist from './Composants/Todolist'

// Composant function
// const App = ()=>
// {
// var date = new Date();
//   return (
//     <div className="App">
//       {/* <div className="InputTache">
//       <input type="text"></input><button className="btn btn-primary">ADD</button>
//       </div> */}
//       <Headerbar />
//       <ListTraining jour={date.getDate()} heure={date.getHours()}/>
//       <Footerbar />
//       {/* <Todolist Nomdetache="Tâche numéro 1"/> */}
//     </div>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      Listedestaches: [],
      Error: false
    }
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);

  }

  HandleChange(e) {
    this.setState({ input: e.target.value })
    console.log(e.target.value);
  }

  HandleSubmit() {
    var arrayTaches = this.state.Listedestaches;
    if(this.state.input !== ""){
      arrayTaches.push(this.state.input)
    }
    this.setState({ Listedestaches: arrayTaches })
    console.log(arrayTaches)
  }


  render() {
    return (
      <div className="App">
        <div className="InputTache">
          <input type="text" placeholder="Entrez une tâche" onChange={this.HandleChange} value={this.state.input}></input>
          <button className="btn btn-primary" onClick={this.HandleSubmit}>ADD</button>
        </div>
        {/* <Headerbar />
            <ListTraining jour={date.getDate()} heure={date.getHours()}/>
            <Footerbar /> */}
        <Todolist Nomdetache="Tâche numéro 1" />
      </div>
    )
  }
}





export default App