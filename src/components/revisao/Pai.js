import React, { useState } from 'react'
import Filho from './Filho'

export default props => {

    let [nome, setNome] = useState('')
    let [idade, setIdade] = useState(0)

    function obterDados(nomeParam, idadeParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
    }
    

    return (
        <>
            <h2>{nome}</h2>
            <h2>{idade}</h2>
            <Filho funcao={obterDados}/>
        </>
    )
}