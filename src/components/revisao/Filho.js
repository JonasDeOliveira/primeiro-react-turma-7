import React from 'react'

function Filho(props) {

    return(
        <>
            <button 
                onClick={() => {
                    props.funcao("Ronaldo", 35)
                    }}>
                passar dados
            </button>
        </>
    )
}

export default Filho