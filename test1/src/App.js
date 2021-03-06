import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid'
import Headerbar from './Composants/Headerbar'
import Footerbar from './Composants/Footerbar'
import ListTraining from './Composants/ListTraining'

import Todolist from './Composants/Todolist'
import ListCity from './Composants/ListCity'
import CityNb from './Composants/CityNb'

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

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       input: "",
//       Listedestaches: [],
//       Error: false,
//       ids : 0
//     }
//     this.HandleChange = this.HandleChange.bind(this);
//     this.HandleSubmit = this.HandleSubmit.bind(this);
//     this.HandleDelete = this.HandleDelete.bind(this);
//   }

//   HandleChange(e) {
//     this.setState({ input: e.target.value })
//   }

//   HandleSubmit() {
//     if(this.state.input != '')
//     {
//       var tableaudetache = this.state.Listedestaches
//       tableaudetache.push({id : this.state.ids +1, Tache : this.state.input})
//       this.setState({Listedestaches : tableaudetache, input :'', Error : false, ids : this.state.ids +1})
//       console.log(tableaudetache)
//     }
//     else{
//       this.setState({ Error : true})
//     }
//   }
//   HandleDelete(index)
//   {
//     var indexn = index
//     var tabledestache =  this.state.Listedestaches
//     tabledestache.splice(index  - 1 ,1)
//     for( var i = index -1 ; i<tabledestache.length ; i++ )
//     {
//       console.log('im in the for')
//       console.log(tabledestache[i])
//       tabledestache[i] = {Tache : tabledestache[i].Tache, id :indexn }
//       indexn = indexn + 1
//       console.log(tabledestache[i])
//     }
//     this.setState({
//       Listedestaches :  tabledestache, ids : this.state.ids-1
//     })

//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="InputTache">
//           <input type="text" placeholder="Entrez une tâche" onChange={this.HandleChange} value={this.state.input}></input>
//           <button className="btn btn-primary" onClick={this.HandleSubmit}>ADD</button>
//         </div>
//         {this.state.Error && <p id="p-error">Merci d'entrer une tâche valide !</p>}
//         {this.state.Listedestaches.map(index =>{return <Todolist key={index.id} Nomdetache = {index.Tache} idp={index.id} functionDelete = {this.HandleDelete}/>})}

//         {/* <Headerbar />
//             <ListTraining jour={date.getDate()} heure={date.getHours()}/>
//             <Footerbar /> */}
//       </div>
//     )
//   }
// }


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      ListCity: [],
      Error: false,
      ids : 0
    }
    this.HandleChangeCity = this.HandleChangeCity.bind(this);
    // this.HandleChangeNb = this.HandleChangeNb.bind(this);
    // this.HandleChangeMonument = this.HandleChangeMonument.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    
  }

  HandleChangeCity(e) {
    this.setState({ input: e.target.value })
  }
  // HandleChangeNb(e) {
  //   this.setState({ input: e.target.value })
  //   console.log( e.target.value)
  // }
  // HandleChangeMonument(e) {
  //   this.setState({ input: e.target.value })
  //   console.log( e.target.value)
  // }
  HandleSubmit() {
    if(this.state.input != '')
        {
          var arrayCity = this.state.ListCity
          arrayCity.push({id : this.state.ids +1, City : this.state.input})
                this.setState({ListCity : arrayCity, input :'', Error : false, ids : this.state.ids +1})
        }
        else{
          this.setState({ Error : true})
        }
  }


  render() {
    return (
      <div className="App">
        <div className="InputCity">
          <input type="text" placeholder="Entrez une ville ..." onChange={this.HandleChangeCity} value={this.state.input}></input>
          <button className="btn btn-primary" onClick={this.HandleSubmit}>ADD</button>
        </div>
        {/* {this.state.Error && <p id="p-error">Merci d'entrer une tâche valide !</p>}
        {this.state.Listedestaches.map(index =>{return <Todolist key={index.id} Nomdetache = {index.Tache} idp={index.id} functionDelete = {this.HandleDelete}/>})} */}
     {this.state.ListCity.map(index =>{return <ListCity key={index.id} idp={index.id} Nomcity = {index.City} />})} 
        {/* <ListTraining jour={date.getDate()} heure={date.getHours()}/>
            <Footerbar /> */}
            <CityNb/>
      </div>
    )
  }
}


export default App