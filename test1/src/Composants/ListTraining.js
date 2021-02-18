import React from 'react';

const ListTraining = (props) => {
    return (
        <div>
            <p style={{ backgroundColor: 'red' }}>INFOS</p>
            <ul style={{ listStyle: 'none' }}>
                <li>NOM :</li>
                <li>PRENOM :</li>
                <li>NUMERO :</li>
            </ul>
            <p>Aujourd'hui, on est le {props.jour} et il est {props.heure} </p>
        </div>
    )
}

export default ListTraining