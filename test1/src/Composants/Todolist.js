import React from 'react';
import './Todolist.css'
import { Button } from 'react-bootstrap';

// Composant function
// export function App2()
const Todolist = () => {
    const style2 ={
        color: 'white',
        backgroundColor: 'black'
    }

    return (
      <div className="NomTache">
          <h2 style={style2}>Tâche n°1</h2>
         {/* <button style={{backgroundColor : 'red'}}>Supprimer</button> */}
         <button className="btn btn-danger">Supprimer</button>
      </div>
    )
}


export default Todolist