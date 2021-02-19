import { useEffect, useState } from "react"


function Usestateexample() {

    const [PGR1, usePgr1] = useState('NULL')
    const [PGR2, usePGR2] = useState('NULL')


    const HandleClickIncr = () => {
        Changeparagraphe1('TAMERE')
    }
    const HandleClickIncr2 = () => {
        Changeparagraphe2('Je suis MAJ parce que P1 a été update')
    }
  

    function Changeparagraphe1(params)
    {
        const pgr = document.getElementById("idPara1")
        pgr.innerHTML = params
    }
    function Changeparagraphe2(params)
    {
        const pgr2 = document.getElementById("idPara2")
        pgr2.innerHTML = params
    }
    function Changeparagraphe3(params)
    {
        const pgr3 = document.getElementById("idPara3")
        pgr3.innerHTML = "Je suis MAJ parce que P2 a été update"
    }

    useEffect(()=>{
        Changeparagraphe1();
    }, [])
    useEffect(()=>{
        Changeparagraphe2();
    }, [PGR1])
    useEffect(()=>{
        Changeparagraphe3();
    }, [PGR2])



    return (
        <div>
            <div className="ParentComp">
                <div className="ParaComp"><p id="idPara1">P1</p></div>
                <div className="ParaComp"><p id="idPara2">P2</p></div>
                <div className="ParaComp"><p id="idPara3">P3</p></div>
            </div>
            <div className="ChildComp">
            <button onClick={HandleClickIncr} >BTN-1</button>
            <button onClick={HandleClickIncr2}>BTN-2</button>
            </div>
        </div>
    )
}

export default Usestateexample