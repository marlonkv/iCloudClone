import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import Label from './compLivres/Label'
import Input from './compLivres/Input'

type Boolean = {
  clique: boolean,
  valor: boolean,
  display: boolean
}

const Senha = ({exibicao, change}:{
    exibicao: Boolean,
    change: (event: ChangeEvent<HTMLInputElement>) => void
  }) => {
  
    return (
    <Estilo style={
        exibicao.display ? 
          {top: '50px', opacity: '1'} 
        : 
          {top: '-9px', opacity: '0'}}>
       
      <Label 
        valor='senha' 
        exibicao={exibicao} 
      />
      
      <Input 
        valor='senha' 
        tipo='password' 
        change={change} 
        exibicaoSenha={!exibicao.display} 
        radius='0 0 10px 10px'
      />

      {exibicao.valor && <button onClick={() => null}>Prox</button>}

    </Estilo>
  )
}

const Estilo = styled.section`
  position: relative;
  z-index: 1;
  transition: .3s;


  button {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  & > div {
    z-index: 0;
    overflow: hidden;    
    position: relative;

    @keyframes anima {
      0% {
        top: -55px;
      }
      100% {
        
        top: 0px;

      }
    }
  }
`

export default Senha