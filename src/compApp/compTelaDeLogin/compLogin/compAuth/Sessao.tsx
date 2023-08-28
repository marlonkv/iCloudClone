import React from 'react'
import styled from 'styled-components'

const Sessao = () => {
  return (
    <Estilo>
      <label htmlFor="sessaoAberta">
        <input
          type="checkbox" 
          name="sessaoAberta" 
          id="sessaoAberta"
        />
        Manter a sessão aberta
      </label>
    </Estilo>
  )
}

const Estilo = styled.section`
  position: relative;
  bottom: -100px;
  left: 12px;
  width: 250px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }

  input {
    height: 15px;
    width: 15px;
  }
`

export default Sessao