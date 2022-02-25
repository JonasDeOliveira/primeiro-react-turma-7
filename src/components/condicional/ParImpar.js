import React, { useState } from 'react'

function ParImpar({num = 0}) {

    return (
      <div>
          <h2>O resultado é:</h2>
          {num % 2 == 0 
          ? <h3>par</h3> 
          : <h3>impar</h3>
          } 
      </div>
    )
}

export default ParImpar