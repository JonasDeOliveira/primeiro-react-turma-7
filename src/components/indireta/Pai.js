import React, { useState } from 'react'
import Filho from './Filho'

function Pai(props) {

    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function setValores(texto, numero ) {
        setTexto(texto)
        setNum(numero)
    }

    return (
      <>
        <h2>
            {texto} {num}
        </h2>
        <Filho funcao={setValores}/>
      </>
    )
}

export default Pai