const MinMax = (props) => {
    console.log(props)
    let result = props.min + props.max
    return (
        <div>
            <h2>
                O valor de {props.max} é maior que o valor {props.min}
            </h2>
            <h2>{result}</h2>
        </div>
        
    )
}

export default MinMax