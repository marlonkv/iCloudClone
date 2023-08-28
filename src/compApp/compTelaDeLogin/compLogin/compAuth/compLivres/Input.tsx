import React, { ChangeEvent } from 'react'

const Input = ({valor, tipo, change, exibicaoSenha, radius} : {
    valor: string,
    exibicaoSenha: boolean,
    tipo: string,
    radius: string,
    change: (event: ChangeEvent<HTMLInputElement>) => void
  }) => {
  
  console.log(exibicaoSenha)

  return (
    <input 
    style={ exibicaoSenha ? {borderRadius: '10px 10px 0 0'} : {borderRadius: `${radius}`}}
    onChange={change} 
    data-logic={valor} 
    type={tipo} 
    name={valor} 
    id={valor} 
    />
  )
}

export default Input