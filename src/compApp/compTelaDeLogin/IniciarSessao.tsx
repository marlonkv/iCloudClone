import React from 'react'
import styled from 'styled-components'

interface Props {
  onClick?: () => void
} 

const IniciarSessao = ({onClick} : Props) => {
  return (
    <Structure>
      <FirstDisplay>  
        <h1>iCloud</h1>
        <button onClick={onClick}>Iniciar sessão</button>
        <p>O melhor lugar para todas as suas fotos, arquivos, notas, e‑mails e muito mais.</p>
      </FirstDisplay>      

      <SecondDisplay>
        <div>
          <img src="https://www.icloud.com/system/icloud.com/2317Hotfix55/pt-br/e6ffc52737977fe1700d423a10874d0b.png" alt="Coleção de ícones para apps disponíveis em iCloud.com, incluindo Mail, Buscar e Lembretes"/>
          <h2>Acesse facilmente apps e dados do seu iPhone na web</h2>
          <p>O iCloud é essencial para que as informações pessoais em seus dispositivos sejam mantidas seguras, atualizadas e disponíveis onde quer que você esteja. No iCloud.com, você pode acessar suas fotos, arquivos e muito mais de qualquer navegador da web. As alterações que você fizer serão sincronizadas com seu iPhone e outros dispositivos. Assim, você sempre terá tudo atualizado.</p>
        </div>
        <div>
          <img src="https://www.icloud.com/system/icloud.com/2317Hotfix55/pt-br/cb89b6112cb1d8e18fac821612c25717.png" alt="Gráfico representando os ícones para vários benefícios do iCloud+, incluindo até 2 TB de armazenamento" />
          <h2>Mais armazenamento e recursos adicionais para proteger sua privacidade</h2>
          <p>Faça o upgrade para o iCloud+ para obter mais armazenamento e recursos adicionais, como a Retransmissão Privada do iCloud, Ocultar Meu E‑mail e o Vídeo Seguro do HomeKit. Você pode até mesmo compartilhar sua assinatura com sua família. Saiba mais em <a href='https://www.apple.com/icloud/' target="_blank">apple.com/icloud.</a></p>
        </div>
      </SecondDisplay>
    </Structure>
  )
}

const FirstDisplay = styled.div`
  display: grid;
  max-width: auto;
  text-align: center;
  margin: 10rem auto 0 auto;
  place-items: center;
  gap: 1rem;

  h1 {
    font-size: 140px;
  }
  button {
    color: white;
    font-size: 19px;
    padding: 8px 30px;
    background: #000000;
    border-radius: 22px;
    border: none;
    font-weight: bold;
    width: max-content;
    cursor: pointer;
  }
  p {
    color: #1d1d1f;
    font-size: 40px;
    font-weight: 600;
    line-height: 44px;
    margin-top: 2rem;
    width: 25ch;
  }
`
const SecondDisplay = styled.div`
  display: flex;
  place-items: start;
  width: 100%;
  justify-content: center;
  gap: 4%;

  div {
    max-width: 400px;
    display: grid;
    gap: 0px;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 17px 20px 40px rgba(0,0,0,.21);
    
    h2 {
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
      color: #1d1d1f;
    }

    p {
      font-size: 17px;
      font-weight: 400;
      line-height: 25px;
      color: #1d1d1f;
    }
    
    img {
      width: 100%;
    }
  }
`;
const Structure = styled.div`
  display: grid;
  gap: 8rem;
`


export default IniciarSessao