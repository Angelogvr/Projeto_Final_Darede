import React from 'react'
import logo from '../assets/logo-darede.svg'
import banner from '../assets/banner-cadastro.svg'
import tel from '../assets/icon-telefone.svg'
import globo from '../assets/icon-globo.svg'
import '../style/telaLogin.css'

function telaLogin() {
  return (
    <div class="box-bodyL">
      <div class="esquerdaL">
        <img src={logo} alt="logo Darede" />
        <img src={banner} class="undrawL" alt="banner cadastro" />
      </div>
      <div class="direitaL">
        <h1>Login</h1>
        <form action="submit">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="button" class="btn-formL">Login</button>
        </form>
        <div class="contaL">
          <p>Não possui uma conta?</p> <a href="">Cadastre-se.</a>
        </div>
        <div class="redirectL">
          <button>
            <img src={tel} alt="ícone entrar em contato" />
            Entre em contato
          </button>
          <button>
            <img src={globo} alt="ícone acesse a darede" />
            Acesse a Darede
          </button>
        </div>
      </div>
    </div>
  );
}

export default telaLogin