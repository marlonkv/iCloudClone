import React, { useState } from 'react'
import styled from 'styled-components'
import Id from './compAuth/Id'
import Senha from './compAuth/Senha'
import Sessao from './compAuth/Sessao'

const Auth = () => {

  const [exibirId, setExibirId] = useState({
    clique: false, 
    valor: false
  });
  const [exibirSenha, setExibirSenha] = useState({
    clique: false, 
    valor: false, 
    display: false
  });

  
  function clicarTela(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
          
    target.dataset.logic === 'id' ? 
      setExibirId( {...exibirId, clique: true}) 
    : 
      setExibirId({...exibirId, clique: false});


    if(exibirSenha.display) {

      target.dataset.logic === 'senha' ? 
      setExibirSenha( {...exibirSenha, clique: true}) 
      : 
      setExibirSenha({...exibirSenha, clique: false});
     
    }
  }
  
  function digitarInput(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    
    if(target.dataset.logic === 'id') {
      
      if (target.value) {
        if(target.value !== '' || '  ') {
          setExibirId({...exibirId, valor: true})           
        }
      } else {  
        setExibirId({...exibirId, valor: false})   
        setExibirSenha({...exibirSenha, display: false})    
      }

    }
    
    if(target.dataset.logic === 'senha') {
      
      if (target.value) {
        if(target.value !== '' || '  ') {
          setExibirSenha({...exibirSenha, valor: true})           
        }
      } else {  
        setExibirSenha({...exibirSenha, valor: false})       
      }
      
    }
  }
  
  //console.log('id', exibirId)
  //console.log('senha', exibirSenha)
  
  return (
    <Estilo 
      onClick={clicarTela}
    >

      <Id
        infoSenha={exibirSenha.display}
        exibicao={exibirId}
        change={digitarInput}
        cliqueProx={() => setExibirSenha({...exibirSenha, display: true})}
      />

      <Senha
        exibicao={exibirSenha}
        change={digitarInput}
      />

    </Estilo>
  )
}

const Estilo = styled.div`
  position: absolute;
  align-items: center;
  align-content: center;
  height: 100vh;
  width: 100vw;

  label {
    position: absolute;
    color: gray;
    left: 15px;
    bottom: -20px;
    transition: .09s linear;
  }

  input {
    font-size: 1.08rem;
    width: 440px;
    height: 38px;
    display: block;
    padding: 1.2rem 1rem 0rem 1rem;
    border: 1px solid gainsboro;

    &:focus {
      outline: none;
    }
  }
`
export default Auth