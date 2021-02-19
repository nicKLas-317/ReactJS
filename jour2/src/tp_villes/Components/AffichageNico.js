import { useState } from "react";


function AffichageNico(props){

    const [modify, usemodifier] = useState(false);
    return(
        <div>
            <p>Nom ville : {props.pNameville} </p>
            <p>Nb Hbts ville : {props.pNhabitant}</p>
            <p>Monument historique de la ville :{props.pMonville} </p>
            {!modify && <button onClick={() => { usemodifier(true); props.pHandleModifierComp(props.pid)}}>Modif</button>}
            {modify && <button onClick={() => { usemodifier(false); props.pHandleModifierComp(props.pid)}}>Valider</button>}
            <button onClick={() => props.pHandleSupprComp(props.id)}>Delete</button>
        </div>
    )
}

export default AffichageNico