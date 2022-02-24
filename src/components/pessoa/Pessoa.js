import React, { useState } from 'react'

function Pessoa(props) {

    return (
      <>
        <hr />
            <div>{props.nome}</div>
            <div>{props.idade}</div>
            <div>{props.sexo}</div>
            <div>{props.estado_civil}</div>
        <hr />
      </>
    )
}

export default Pessoa