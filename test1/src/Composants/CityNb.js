import React from 'react';



class CityNb extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: "",
        }
        this.HandleSubmit = this.HandleSubmit.bind(this);
      }
      HandleChangeNb(e) {
        this.setState({ input: e.target.value })
      }

    HandleSubmit() {
        if(this.state.input != '')
            {
             console.log(this.state.input);
            }
            else{
              this.setState({ Error : true})
            }
      }
    render() {
        return (
            <div className="Nbcity">
                     <input type="number" placeholder="Entrez un nombre ..." onChange={this.HandleChangeNb} value={this.state.input}></input>
                    <button className="btn btn-primary" onClick={this.HandleSubmit}>ADD</button>
            </div>
        )}

}


export default CityNb