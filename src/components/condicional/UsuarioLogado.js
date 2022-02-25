import React from 'react'
import If from './If'

function UsuarioLogado(props) {

    const usuario = props.usuario || {}

    return(
        <>
        {/* {
            usuario && usuario.nome && usuario.email 
            ?
            <div>
                <h2>Usuário Logado:</h2>
                <h3>
                    {usuario.nome} - {usuario.email}
                </h3>
            </div>
            :
            <h2>
                Bem vindo, <a href="#">faça seu login</a>
            </h2>
        } */}
            <If test={usuario && usuario.nome && usuario.email}>
                <h2>Usuário Logado:</h2>
                <h3>
                    {usuario.nome} - {usuario.email}
                </h3>
            </If>
            <If test={!usuario || !usuario.nome || !usuario.email}>
                <h2>
                    Bem vindo, <a href="#">faça seu login</a>
                </h2>
            </If>
        </>
    )
}

export default UsuarioLogado