import React, { useState } from 'react'

function Contador(props) {

    const [numero, setNumero] = useState(props.inicial)

    const incremento = () => {
        setNumero(numero + props.passo)
    }
    const decremento = () => {
        if (numero == 0) {
            alert("não pode mais")
            return
        }
        setNumero(numero - props.passo)
    }
    

    return (
        <>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
        </>
        
    )
}

export default Contador