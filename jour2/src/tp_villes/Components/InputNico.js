import React from 'react'
import './InputNico.css'
import AffichageNico from './AffichageNico'

class InputNico extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Nomville: "",
            Nhabitant: 0,
            Monville: "",
            ListeVilles: [],
            nbMaj: 0
        }
        this.HandlechangeVille = this.HandlechangeVille.bind(this)
        this.HandlechangeHbts = this.HandlechangeHbts.bind(this)
        this.HandlechangeMonument = this.HandlechangeMonument.bind(this)
        this.HandleAjouter = this.HandleAjouter.bind(this)
        this.HandleModifierComp = this.HandleModifierComp.bind(this)
        this.HandleModifier = this.HandleModifier.bind(this)
        this.HandleDelete = this.HandleDelete.bind(this)
    }
    HandlechangeVille(e) {
        this.setState({ Nomville: e.target.value })
    }
    HandlechangeHbts(e) {
        this.setState({ Nhabitant: e.target.value })

    }
    HandlechangeMonument(e) {
        this.setState({ Monville: e.target.value })

    }
    componentDidUpdate(){
        var count = 1;
        
        this.setState({nbMaj : count }) ;
        console.log(this.state.nbMaj)
    }
    HandleAjouter() {
        let copyArrayVilles = this.state.ListeVilles
        copyArrayVilles.push({ Nomville: this.state.Nomville, Nhabitant: this.state.Nhabitant, Monville: this.state.Monville })
        this.setState({
            Nomville: '',
            Nhabitant: 0,
            Monville: '',
            ListeVilles: copyArrayVilles
        })

    }

    HandleModifierComp(index) {
        var copie = this.state.ListeVilles
        copie[index].Nomville = this.state.Nomville
        copie[index].Nhabitant = this.state.Nhabitant
        copie[index].Monville = this.state.Monville
        this.setState({
            Nomville: '',
            Nhabitant: 0,
            Monville: '',
            ListeVilles: copie
        })
    }

    HandleModifier(index) {
        var copie = this.state.ListeVilles
        this.setState({ Nomville: copie[index].Nomville })
        this.setState({ Nhabitant: copie[index].Nhabitant })
        this.setState({ Monville: copie[index].Monville })
    }

    HandleDelete(index) {
        var index_copy = index
   
        var copie = this.state.ListeVilles
        copie.splice(index - 1, 1);
        for (var i = index - 1; i < copie.length; i++) {
            copie[i] = { Ville: copie[i].Ville, id: index_copy }
            index_copy = index_copy + 1
        }
        this.setState({
            ListeVilles: copie, id: this.state.id - 1
        })
    }

    render() {
        return (
            <div>
                <h1>COMPOSANT Nico</h1>
                <input type="text" className="inputPerso" name="Nomville" placeholder="Nom de la ville "
                    onChange={this.HandlechangeVille} value={this.state.Nomville}></input>
                <input type="number" className="inputPerso" name="Nhabitant" placeholder="Nb habitants "
                    onChange={this.HandlechangeHbts} value={this.state.Nhabitant}></input>
                <input type="text" className="inputPerso" name="Monville" placeholder="Monument de la ville "
                    onChange={this.HandlechangeMonument} value={this.state.Monville}></input>
                <button onClick={this.HandleAjouter}>Add</button>
                <p>J'ai été MAJ  : {this.state.nbMaj}</p>
                <div>
                    {this.state.ListeVilles.map((iville, index) => {
                        return <AffichageNico key={index}
                            pNameville={iville.Nomville}
                            pNhabitant={iville.Nhabitant} pMonville={iville.Monville}
                            pid={index}
                            pHandleModifierComp={this.HandleModifierComp}
                            pHandleModifier={this.HandleModifier}
                            pHandleSupprComp={this.HandleDelete}
                        />
                    })}
                </div>
            </div>

        )

    }
}

export default InputNico