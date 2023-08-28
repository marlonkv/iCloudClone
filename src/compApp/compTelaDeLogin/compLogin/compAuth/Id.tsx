import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import Label from './compLivres/Label'
import Input from './compLivres/Input'

type Boolean ={ 
  clique: boolean;
  valor: boolean
}

const Id = ({exibicao, infoSenha, change, cliqueProx} :{
    exibicao: Boolean,
    infoSenha: boolean,
    change: (event: ChangeEvent<HTMLInputElement>) => void,
    cliqueProx: (event: React.MouseEvent<HTMLButtonElement>) => void
  }) => {
  
  return (
    <Estilo>

      <Label 
        exibicao={exibicao} 
        valor='id' 
      />

      <Input 
        valor='id' 
        tipo='text' 
        change={change} 
        exibicaoSenha={infoSenha} 
        radius='10px'
      />

      {exibicao.valor && !infoSenha && 
        <button onClick={cliqueProx} data-logic='senha'>Prox</button>
      }
    
    </Estilo>
  )
}

const Estilo = styled.section`
  position: absolute;
  top: 45%;
  z-index: 10;


  button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`

export default Id