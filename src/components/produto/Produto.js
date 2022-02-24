import React, { useState } from 'react'
import './Produto.css'

function Produto(props) {

    let btnClasses = 'btn-comprar '
    btnClasses += props.verde ? 'verde' : ''
    btnClasses += props.azul ? 'azul' : ''
    btnClasses += props.preto ? 'preto' : ''

    return (
        <>
        <li className="item">
            <div className="nome">{props.nome}</div>
            <div className="marca">{props.marca}</div>
            <div className="valor">R$ {props.valor}</div>
            <button className={btnClasses}>Comprar</button>
        </li>
        </>
    )
}

export default Produto

