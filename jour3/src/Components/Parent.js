import Enfant from './Enfant'
import {useContext} from 'react'

function Parent(){
    const BJR = useContext()
    return(
        <div>
            <p>PARENT</p>
            <Enfant/>
        </div>
    )
    
}

export default Parent
