import React from 'react';
import styled from 'styled-components';

const UsuarioInvalido = () => {
  return (
    <Estilo>
      <h3>ID Apple ou senha inválido</h3>
      <p><a href="#">Esqueceu a senha?</a></p>
    </Estilo>
  )
}

const Estilo = styled.div`
  background-color: #FAE9A3;
  padding: .5rem 3.3rem;
  position: absolute;
  border-radius: .5rem;
  display: grid;
  align-content: center;
  bottom: 242px;
  animation: anima .1s;

  @keyframes anima {
    0%{
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    border: 11px solid #FAE9A3;
    border-left: 11px solid white;
    border-top: 11px solid white;
    border-right: 11px solid white;
    background-color: antiquewhite;
    display: block;
    position: absolute;
    top: -20px;
  }

  h3 {
    font-size: .9rem;
    font-weight: 100;
  }
  p {
    font-size: .9rem;
    font-weight: 100;
    text-decoration: underline;
  }
  a {
    color: #503E30;
  }
`

export default UsuarioInvalido