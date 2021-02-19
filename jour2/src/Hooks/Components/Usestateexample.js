import { useEffect, useState } from "react"


function Usestateexample() {
    // USE STATE
    const [Nomclient, useNomClient] = useState('')
    const [ListClient, useListClient] = useState([])

    const HandleClientInput = (e) => {
        useNomClient(e.target.value)
    }

    const HandleClickAdd = () => {
        var listClientCopy = ListClient
        listClientCopy.push(Nomclient)
        
        useListClient(listClientCopy)
        useNomClient('')
    }


    // USE EFFECT
    function Changeparagraphe()
    {
        const pgr = document.getElementById("idPara")
        pgr.innerHTML = "la paragraphe a été modifié"
    }
    useEffect(()=>{
        console.log("Nomclient vient d'etre update")
        Changeparagraphe();
    }, [Nomclient])


    return (
        <div>
            <p>Entre le nom du client  <input type="text" name="Client" value={Nomclient} onChange={HandleClientInput}></input>
                <button onClick={HandleClickAdd}> ADD</button>
            </p>
            <ul>
                {ListClient.map((client, index) => { return <li key={index}> {client}</li> })}
            </ul>
            <p className="paragraphe" id="idPara"></p>

        </div>
    )
}

export default Usestateexample