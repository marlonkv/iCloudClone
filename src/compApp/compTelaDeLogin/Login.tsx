import React, { useEffect } from 'react'
import styled from 'styled-components'
import Auth from './compLogin/Auth'
import DesvioFluxo from './compLogin/DesvioFluxo'
import Decoracao from './compLogin/Decoracao'

const Login = () => {

  return (
    <Structure > 

      <Decoracao />
      <Auth />
      <DesvioFluxo />

    </Structure>
  )
}



const Structure = styled.div`
  display: grid;
  padding: 70px;
  max-width: 490px;
  box-shadow: 8px 8px 40px rgba(0,0,0,.17);
  border-radius: 42px;
  justify-items: center;
  align-items: center;
  position: relative;
  margin: 60px auto 0 auto;
  height: 450px;
  gap: 3rem;

  div { 
    justify-items: center;
    display: grid;
  }

  div:last-child {
    display: grid;
    gap: .4rem;

    a {
      text-decoration: none;
      color: #06c;
      font-size: 16px;
      font-weight: 10;
    }
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 36px;
    color: #000;
  }

  input { 
    border-color:1px solid #d2d2d7;

  }
`



export default Login