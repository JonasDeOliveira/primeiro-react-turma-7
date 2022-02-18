export default props => {

    function cadastrar () {
        console.log('cadastrou')
    }

    return (
        <button onClick={cadastrar}>
            Cadastrar
        </button>
    )
}