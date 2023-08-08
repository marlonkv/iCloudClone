import React from 'react'
import IniciarSessao from '../telaDeLogin/IniciarSessao'
import Login from '../telaDeLogin/Login'

const TelaDeLogin = () => {

  const [control, setControl] = React.useState(false)

  function alterarInterface() {
    console.log('foi')
    setControl(!control)
  }

  return (

    control ? (
      <Login />
    ) : (
      <IniciarSessao onClick={alterarInterface} />
    )  
  )
}

export default TelaDeLogin