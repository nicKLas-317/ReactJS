import React from 'react';
import './Listcity.css'


// Composant function
// export function App2()
class ListCity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          input: "",
       
        }
        this.style2 ={
            color: 'white',
        }  
      }



      

      render() {
        return (
            <div className="NomCity">
            <h5 style={this.style2}>{this.props.Nomcity}</h5>
            <p>{this.props.Nbcity}</p>  
            <p>{this.props.Monumentcity}</p>  
        </div>
        )}
  


}


export default ListCity