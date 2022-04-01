import React from 'react'
import logo from '../assets/logo-darede.svg'
import banner from '../assets/banner-cadastro.svg'
import tel from '../assets/icon-telefone.svg'
import globo from '../assets/icon-globo.svg'
import '../style/telaCadastro.css'

function telaCadastro() {
  return (
    <div class='box-body'>
      <div class="esquerda">
        <img src={logo} alt="logo Darede" />
        <img src={banner} class='undraw' alt="banner cadastro" />
      </div>
      <div class="direita">
        <h1>Cadastro</h1>
        <form action="submit">
          <input type="text" placeholder="Nome de Usuário" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="button" class="btn-form">Cadastrar</button>
        </form>
        <div class="conta">
          <p>Já possui uma conta?</p> <a href="">Conecte-se.</a>
        </div>
        <div class="redirect">
          <button>
            <img src={tel} alt="ícone entrar em contato"/>
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

export default telaCadastro;
