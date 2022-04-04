import React from 'react'
import logo from '../assets/logo-darede.svg'
import banner from '../assets/banner-cadastro.svg'
import tel from '../assets/icon-telefone.svg'
import globo from '../assets/icon-globo.svg'
import '../style/telaLogin.css'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      erroMensagem: '',
      isLoading: false
    }
  };

  efetuaLogin = (event) => {
    event.preventDefault();

    this.setState({ erroMensagem: "", isLoading: true })

    /* alterar url da api*/
    axios.post('http://localhost:5000/api/login', {
      email: this.state.email,
      senha: this.state.senha
    })

      .then(resposta => {
        if (resposta.status === 200) {
          localStorage.setItem('usuario-login', resposta.data.token);
          this.setState({ isLoading: false });
          this.props.history.push('/');
        }
      })
      .catch(() => {
        this.setState({ erroMensagem: "Email e/ou senha inválidos!", isLoading: false });
      })
  }

  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value })
  }

}


function telaLogin() {
  return (
    <div class="box-bodyL">
      <div class="esquerdaL">
        <img src={logo} alt="logo Darede" />
        <img src={banner} class="undrawL" alt="banner cadastro" />
      </div>
      <div class="direitaL">
        <h1>Login</h1>
        <form action="submit" onSubmit={this.efetuaLogin}>

          <input type="email" placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.atualizaStateCampo} />

          <input type="password" placeholder="Senha"
            name="senha"
            value={this.state.senha}
            onChange={this.atualizaStateCampo} />

          <p style={{ color: 'red' }}>{this.state.erroMensagem}</p>

          {
            this.state.isLoading === false &&
            <button disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''} type="button" class="btn-formL">Login</button>
          }
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