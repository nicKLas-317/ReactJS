import { useState } from "react"


function Usestateexample() {

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
    return (
        <div>
            <p>Entre le nom du client  <input type="text" name="Client" value={Nomclient} onChange={HandleClientInput}></input>
                <button onClick={HandleClickAdd}> ADD</button>
            </p>
            <ul>
                {ListClient.map((client, index) => { return <li key={index}> {client}</li> })}
            </ul>
        </div>
    )
}

export default Usestateexample