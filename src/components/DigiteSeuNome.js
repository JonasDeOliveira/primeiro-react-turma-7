import React, { useState } from 'react'

function DigiteSeuNome(props) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    return(
        <>
            <h2>{nome}</h2>
            <h2>{email}</h2>
            <input type="text" 
                placeholder="Digite seu nome"
                value={nome}
                onChange={event => {setNome(event.target.value)}}/>
            <input type="email" 
                placeholder="Digite seu email"
                value={email}
                onChange={event => setEmail(event.target.value)}/>
        </>
    )
}

export default DigiteSeuNome