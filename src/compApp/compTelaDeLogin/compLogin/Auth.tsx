import React, { useState } from 'react'
import styled from 'styled-components'
import Id from './compAuth/Id'
import Senha from './compAuth/Senha'
import UsuarioInvalido from './compAuth/UsuarioInvalido'

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
  const [credenciais, setCredenciais] = React.useState({
    id: '',
    senha: ''
  });
  const [usuarioInvalido, setUsuarioInvalido] = React.useState(false)
  
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
    setUsuarioInvalido(false)

    if(target.dataset.logic === 'id') {
      if (target.value) {
        if(target.value !== '' || '  ') {
          setExibirId({...exibirId, valor: true})           
          setCredenciais({...credenciais , id:`${target.value}`})
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
          setCredenciais({...credenciais , senha:`${target.value}`})

        }
      } else {  
        setExibirSenha({...exibirSenha, valor: false})       
      }
      
    }

  }
  function logar() {
    const x = {
      id: 'marlon',
      senha: '12345'
    }

    
    if (credenciais.id === x.id) {
      if (credenciais.senha === x.senha) {
        console.log('logou')
      } else {
        setUsuarioInvalido(true)
      }
    } else {
      setUsuarioInvalido(true)
    }
    
  }

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
        loginClique={logar}
      />

      {usuarioInvalido && <UsuarioInvalido/>}

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