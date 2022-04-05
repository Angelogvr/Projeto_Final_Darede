import React from 'react'
import logo from '../assets/logo-darede.svg'
import banner from '../assets/banner-cadastro.svg'
import tel from '../assets/icon-telefone.svg'
import globo from '../assets/icon-globo.svg'
import '../style/telaCadastro.css'

import api from '../services/api'
import { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Cadastro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      idTipoUsuario: 0,
      nomeUsuario: '',
      email: '',
      senha: '',
      cadastroMensagem: "",
      idUsuario: 0
    };
  };

  cadastrarUsuario = (event) => {
    event.preventDefault();

    this.setState({ erroMensagem: "", isLoading: true })

    api.post('http://localhost:5000/api/Usuarios', {
      nomeUsuario: this.state.nomeUsuario,
      email: this.state.email,
      senha: this.state.senha
    })

      .then(resposta => {
        if (resposta.status === 200) {
          localStorage.setItem('usuario-cadastro', resposta.data.token);
          this.setState({ isLoading: false });
          this.props.history.push('/Login');
        }
      })
  }


  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value })
    console.log([campo.target.name] + ' : ' + campo.target.value)
  }

  limparCampos = () => {
    this.setState({
      nomeUsuario: '',
      email: '',
      senha: '',
    })
  };

  render() {
    return (
      <div className='box-body'>
        <div className="esquerda">
          <img src={logo} alt="logo Darede" />
          <img src={banner} className='undraw' alt="banner cadastro" />
        </div>
        <div className="direita">
          <h1>Cadastro</h1>
          <form action="submit" onSubmit={this.cadastrarUsuario}>

            <input type="text" placeholder="Nome de Usuário"
              name='nomeUsuario'
              onChange={this.atualizaStateCampo}
              value={this.state.nomeUsuario}
            />

            <input type="email" placeholder="Email"
              name='email'
              onChange={this.atualizaStateCampo}
              value={this.state.email}
            />

            <input type="password" placeholder="Senha"
              name='senha'
              onChange={this.atualizaStateCampo}
              value={this.state.senha}
            />

            <p style={{ color: 'green' }}>{this.state.cadastroMensagem}</p>

            <button type="submit" className="btn-form">Cadastrar</button>
          </form>

          <div className="conta">
            <p>Já possui uma conta?</p> <Link to="/Login">Conecte-se.</Link>
          </div>
          <div className="redirect">
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
}

