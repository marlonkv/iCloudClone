import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import Label from './compLivres/Label'
import Input from './compLivres/Input'

type Boolean = {
  clique: boolean,
  valor: boolean,
  display: boolean
}

const Senha = ({exibicao, change, loginClique}:{
    exibicao: Boolean,
    change: (event: React.ChangeEvent<HTMLInputElement>) => void,
    loginClique: (event: React.MouseEvent<HTMLButtonElement>) => void
  }) => {
  
    return (
    <Estilo style={
        exibicao.display ? 
          {top: '27.3px', opacity: '1'} 
        : 
          {top: '-9px', opacity: '0'}}>
       
      <Label 
        valor='senha' 
        exibicao={exibicao}
        nome='Senha'
      />
      
      <Input 
        valor='senha' 
        tipo='password' 
        change={change} 
        exibicaoSenha={!exibicao.display} 
        radius='0 0 10px 10px'
      />

      {exibicao.valor && <button onClick={loginClique}>Prox</button>}

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