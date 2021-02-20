import './inputdata.css'
import React, { useState, useEffect } from 'react'
import Affichageville from './Affichageville'

// SORRY : NO TIME FOR CSS

function Inputcpn() {
    const [ListVille, useListVille] = useState([]);
    const [count, useCount] = useState(0)
    const [Nameville, useName] = useState('');
    const [Nhabitant, useNhabitant] = useState(0);
    const [Monville, useMonville] = useState('');
    // For add or Modify button
    const [btnAdd, usebtnAdd] = useState(true)


    const HandlechangeVille = (e) => {
        useName(e.target.value)
    }

    const HandlechangeHbts = (e) => {
        useNhabitant(e.target.value)
    }

    const HandlechangeMonument = (e) => {
        useMonville(e.target.value)
    }

    useEffect(function CountMAJ() {
        useCount(count + 1)
    }, [Nameville, Nhabitant, Monville])

    const HandleAjouter = () => {
        let name = Monville
        let nb = Nhabitant
        let mon = Monville
        let CopyListeVilles = ListVille
        if (Nameville !== '' && Nhabitant > 0 && Monville !== '') {
            CopyListeVilles.push({ Nameville: Nameville, Nhabitant: Nhabitant, Monville: Monville })
        }
        useName(name)
        useNhabitant(nb)
        useMonville(mon)
        useListVille(CopyListeVilles)
    }


    const HandleModifier = (index) => {
        let copie = ListVille

        copie[index].Nameville = Nameville
        copie[index].Nhabitant = Nhabitant
        copie[index].Monville = Monville

        usebtnAdd(true)
        useName(Nameville)
        useNhabitant(Nhabitant)
        useMonville(Monville)
        useListVille(copie)
    }

    const HandleModifierComp = (index) => {
        let copy = ListVille

        useName(copy[index].Nameville)
        useNhabitant(copy[index].Nhabitant)
        useMonville(copy[index].Monville)

        usebtnAdd(false)
    }


    return (
        <div>
            <div className='Inputsdata'>
                <h1>COMPOSANT </h1>
                <input type="text" name="Nameville" placeholder="Nom de la ville "
                    onChange={HandlechangeVille} value={Nameville}></input>
                <input type="text" name="Monville" placeholder="Monument de la ville "
                    onChange={HandlechangeMonument} value={Monville}></input>
                <input type="number" name="Nhabitant" placeholder="Nb habitants "
                    onChange={HandlechangeHbts} value={Nhabitant}></input>
                {btnAdd && <button onClick={HandleAjouter}>Ajouter</button>}
            </div>
            <p>Le nombre de fois que mon état à été mis à jour est {count}</p>
            <div>
                {
                    ListVille.map((iville, index) => {
                        return <Affichageville key={index}
                            pNameville={iville.Nameville}
                            pNhabitant={iville.Nhabitant}
                            pMonville={iville.Monville}
                            pHandleModifier={HandleModifier}
                            pHandleModifierComp={HandleModifierComp}
                            pid={index}
                        />
                    })}
            </div>
        </div>
    )
}



export default Inputcpn