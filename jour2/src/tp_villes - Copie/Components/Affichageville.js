import { useState } from "react";


function Affichageville(props) {
    const [ modifier, usemodifier] = useState(false)
    return (
        <div>
            <h1>{props.pNameville}</h1>
            <h3>{props.pNhabitant}</h3>
            <h3>{props.pMonville}</h3>
            {!modifier && <button onClick ={() => {usemodifier(true); props.pHandleModifier(props.pid)}}>Modifier</button>}
            {modifier && <button onClick ={() =>{ usemodifier(false);props.pHandleModifierComp(props.pid)}}>Valider</button>}
        </div>
    )
}

export default Affichageville