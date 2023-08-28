import React from 'react'

type Boolean = {
  clique: boolean,
  valor: boolean
}

const Label = ({valor, exibicao}:{
    valor:string
    exibicao: Boolean
  }) => {



  return (
    <label 
      style={ 
        exibicao.valor || exibicao.clique ? {
          fontSize: `${12}px`,
          top: `${10}px`,
        } : {
          fontSize: `${17.3}px`,
          top: `${18}px`,
        }
        
      }
   
      htmlFor={valor}
    >
     {valor}  
    </label>
  )
}

export default Label