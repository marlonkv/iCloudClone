import React, { useEffect } from 'react'
import IniciarSessao from './compTelaDeLogin/IniciarSessao'
import Login from './compTelaDeLogin/Login'
const TelaDeLogin = () => {

  const [control, setControl] = React.useState(false)

  return (
    control ? (
      <Login  />
    ) : (
      <IniciarSessao onClick={() => setControl(!control)} />
    )  
  )
}

export default TelaDeLogin