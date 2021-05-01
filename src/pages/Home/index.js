import './styles.css'
import React from 'react';

import logoimg from '../../assets/logo.svg'
import homeImage from '../../assets/image.svg'

function Home() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <img src={logoimg} alt="Empbank" />

          <nav>
            <a href="/">
              Home
            </a>

            <a href="/">
              Fale conosco
            </a>

            <button type="button">
              Acessar minha conta
            </button>
          </nav>
        </header>

        <main>
          <div>
            <h1>
              <span>Banco simples, fácil e gratuito</span> <br /> para
              <span className="spotlight-green"> empreendedores</span>
            </h1>

            <span>
              Obtenha as ferramentas financeiras e os insights para iniciar,
              construir e expandir seus negócios.
            </span>

            <button type="button">
              Abrir conta gratuita
            </button>
          </div>

          <img src={homeImage} alt="Empbank" />
        </main>
      </div>
    </div>
  )
}

export default Home;