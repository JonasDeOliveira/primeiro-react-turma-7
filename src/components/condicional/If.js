import React from 'react'

function If(props) {

    if (props.test) {
        return props.children
    } else {
        return false
    }
}

export default If