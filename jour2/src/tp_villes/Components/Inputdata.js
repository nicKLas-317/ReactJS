import './inputdata.css'
import React from 'react'
import Affichageville from './Affichageville'


class Inputcpn extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            Nameville: '',
            Nhabitant: 0,
            Monville: '',
            ListVille: []
        }

        this.HandlechangeVille = this.HandlechangeVille.bind(this)
        this.HandlechangeHbts = this.HandlechangeHbts.bind(this)
        this.HandlechangeMonument = this.HandlechangeMonument.bind(this)
        this.HandleAjouter = this.HandleAjouter.bind(this)
    }
    HandlechangeVille(e) {
        this.setState({ Nameville: e.target.value })
    }
    HandlechangeHbts(e) {
        this.setState({ Nhabitant: e.target.value })

    }
    HandlechangeMonument(e) {
        this.setState({ Monville: e.target.value })

    }

    HandleAjouter() {
        if (this.state.Nameville != '' && this.state.Nhabitant > 0 && this.state.Monville != '') {
            var copy = this.state.ListVille
            copy.push({ Nameville: this.state.Nameville, Nhabitant: this.state.Nhabitant, Monville: this.state.Monville })
            this.setState({
                Nameville: '',
                Nhabitant: 0,
                Monville: '',
                ListVille: copy
            })
        }

        
    }

    render() {
        return (
            <div>
               <div className='Inputsdata'>
               <h1>COMPOSANT </h1>
                <input type="text" name="Nameville" placeholder="Nom de la ville "
                    onChange={this.HandlechangeVille} value={this.state.Nomville}></input>
                <input type="number" name="Nhabitant" placeholder="Nb habitants "
                    onChange={this.HandlechangeHbts} value={this.state.Nhabitant}></input>
                <input type="text" name="Monville" placeholder="Monument de la ville "
                    onChange={this.HandlechangeMonument} value={this.state.Monville}></input>
                <button onClick={this.HandleAjouter}>Add</button>
               </div>
           <div>
           {this.state.ListVille.map((iville, index)=>{
                  return  <Affichageville pNameville={iville.Nameville} 
                  pNhabitant={iville.Nhabitant} pMonville={iville.Monville}
                  />})}
           </div>
            </div>
        )
    }
}

export default Inputcpn