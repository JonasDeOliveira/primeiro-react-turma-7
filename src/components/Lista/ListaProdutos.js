import produtos from './produtos'

function ListaProdutos(props) {
    
    function exibirLista() {
        return produtos.map(p => {
            return (
                <li key={p.id}>
                    <div>{p.id}</div>
                    <h3>{p.nome}</h3>
                    <h3>R$ {p.preco}</h3>
                </li>
                
            )
        })
    }
    
    return(
        <>
            <h2>Lista de Produtos</h2>
            <ul>
                {exibirLista()}
            </ul>
            
        </>
    )
}

export default ListaProdutos