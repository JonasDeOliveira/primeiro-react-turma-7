import './botao.css'

function TesteBotao(props) {
    return <button style={{backgroundColor: props.backColor}} className="teste-botao">{props.label}</button>
}

export default TesteBotao