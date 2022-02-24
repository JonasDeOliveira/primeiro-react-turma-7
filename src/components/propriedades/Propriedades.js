import React, { useState } from 'react'

function Propriedades(props) {

    let texto = '';
    if (props.name) {
        texto = props.name
    }

    if (props.nome) {
        texto = props.nome
    }

    return (
      <>
        <h2>{texto}</h2>
      </>
    )
}

export default Propriedades