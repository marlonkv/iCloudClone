import React from 'react'
import styled from 'styled-components'

const Login = () => {

  const [exibicaoSenha, setExibicaoSenha] = React.useState(false)
  const [booleanClique, setBooleanClique] = React.useState(false);
  const [booleanValor, setBooleanValor] = React.useState(false);


  function clique(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    const logic = target.dataset.logic;

    if (logic) {
      setBooleanClique(true)
    } else {
      setBooleanClique(false)
    }

  }
  function valueInput(e: React.ChangeEvent<HTMLInputElement>) {

    if(e.target.value) {
      setBooleanValor(true)
    } else {
      setBooleanValor(false)
    }

  }
  const booleanMain = booleanClique || booleanValor;
  

  return (
    <Structure onClick={clique}> 
      <div>
        <img src="https://www.icloud.com/system/icloud.com/2317Hotfix48/pt-br/4f72d89d71e9abcc4e37c71fb77fe65b.svg" height='160' alt="" />
        <h1>Inicie sessão com o ID Apple</h1>
      </div>

      <EmailSenha>
        <Input>
          <label htmlFor="id" 
          data-logic='ID'
            style={ 
              booleanMain ? {
              fontSize: `${12}px`,
              top: `${10}px`,
            } : {
              fontSize: `${17.3}px`,
              top: `${18}px`,
            }

          }
          >ID Apple</label>
          <input onChange={valueInput} data-logic='ID' type="text" name='id' id='id' style={{borderRadius: '10px'}}/>

          { booleanMain && (<img src='https://firebasestorage.googleapis.com/v0/b/icloudfullclone.appspot.com/o/leftarrowinsideacircle_122022%20(1).svg?alt=media&token=629df39c-ceae-4faf-a782-b7326a4fc395' alt='prosseguir'/>)}
        </Input>

        <Input style={exibicaoSenha ? {opacity: '1'} : {opacity: '0'}}>
          <label htmlFor="senha">Senha</label>
          <input type="text" name='senha' id='senha'/>
        </Input>
      </EmailSenha>

      <label htmlFor="sessaoAberta">
        <input type="checkbox" name="sessaoAberta" id="sessaoAberta" />
        Manter a sessão aberta
      </label>

      <div>
        <a href="#">Esqueceu o ID Apple ou a senha?</a>
        <a href="#">Crie um ID Apple</a>
      </div>
    </Structure>
  )
}


const Input = styled.div`
  display: grid;
  position: relative;

  label {
    position: absolute;
    left: 20px;
    color: gray;
    transition: .1s;
  }

  img {
    height: 25px;
    transform: rotate(180deg);
    position: absolute;
    right: 20px;
    top: 18px;
    color: gray;
  }
`
const EmailSenha = styled.div`
  display: grid;

  input {
    font-size: 1.08rem;
    width: 440px;
    padding: 27px 20px 8px 20px;
    border: 1px solid gainsboro;

    &:focus {
      outline: none;
    }
 }
`
const Structure = styled.div`
  display: grid;
  gap: 2rem;
  padding: 70px;
  max-width: 490px;
  box-shadow: 8px 8px 40px rgba(0,0,0,.17);
  margin: 0 auto;
  border-radius: 42px;
  justify-items: center;

  label {
    display: flex;
    font-size: 17px;
    gap: .4rem;
  }

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