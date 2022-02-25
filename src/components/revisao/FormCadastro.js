import React, { useState } from 'react'

function FormCadastro(props) {

  let [nome, setNome] = useState('')
  let [email, setEmail] = useState('')

  const cadastrar = () =>{
    console.log("cadastrou")
  }

    return (
      <>
        <form>
          <label>Nome: </label>
          <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
          <br/>
          <label>Email: </label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <br/>
          <button onClick={() => cadastrar()}>Cadastrar</button>
        </form>
        
      </>
    )
}

export default FormCadastro
