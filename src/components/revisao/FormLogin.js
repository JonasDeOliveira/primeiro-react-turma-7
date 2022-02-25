import React, { Component } from 'react'

class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: ''
        }
    }

    cadastrar() {
        console.log(this.state.nome, this.state.email)
    }

    render() {
        return (
            <>
                <form>
                    <label>Nome: </label>
                    <input type="text" value={this.state.nome} onChange={
                        (event) => this.setState({nome: event.target.value})} />
                    <br />
                    <label>Email: </label>
                    <input type="email" value={this.state.email} onChange={(event) => this.setState({email:event.target.value})} />
                    <br />
                </form>
                <button onClick={() => this.cadastrar()}>Cadastrar</button>
            </>
        )
    }
}

export default FormLogin