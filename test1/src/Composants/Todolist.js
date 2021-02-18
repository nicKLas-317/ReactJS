import React from 'react';
import './Todolist.css'
import { Button } from 'react-bootstrap';

// Composant function
// export function App2()
const Todolist = (props) => {
    const style2 ={
        color: 'black',
    }

    return (
      <div className="NomTache">
          <h2 style={style2}>{props.Nomdetache}</h2>
         {/* <button style={{backgroundColor : 'red'}}>Supprimer</button> */}
         <button className="btn btn-danger">Supprimer</button>
      </div>
    )
}


export default Todolist