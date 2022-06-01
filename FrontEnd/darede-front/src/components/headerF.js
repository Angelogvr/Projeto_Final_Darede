import React from 'react';
import { Link } from 'react-router-dom';
import { Component, useState } from 'react';

import Modal from './modal'

import logo from '../assets/logo-darede.svg'
import perfil from '../assets/icon-perfil.svg'
import plus from '../assets/icon-plus.svg'
import filter from '../assets/icon-filter.svg'

import '../style/header.css'
import axios from 'axios';
import api from '../services/api';

export default class HeaderF extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isModalVisible: false,
            cadastroMensagem: '',
            idInfraestrutura: '',
            idUsuario: '1',
            idZona: '',
            idInstancia: '',
            idSoftware: '',
            ipPrivado: 'aaaa',
            ipPublico: 'bbbb',
        };
    };

    CadastroInfra = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true })

        const Infraestrutura = {
            "idUsuario": 1,
            "idInstancia": this.state.idInstancia,
            "idSoftware": this.state.idSoftware,
            "idZona": this.state.idZona,
            "ipPrivado": this.state.ipPrivado,
            "ipPublico": this.state.ipPublico,
            // "idInstanciaNavigation": null,
            // "idSoftwareNavigation": null,
            // "idUsuarioNavigation": null,
            // "idZonaNavigation": null
        }

        axios.post('http://localhost:5000/api/Infraestruturas', Infraestrutura)

            .then(resposta => {
                if (resposta.status === 201) {
                    localStorage.setItem('usuario-cadastro', resposta.data.token);
                    this.setState({ isLoading: false });
                    alert('Cadastro realizado!')
                    // this.props.history.push('/homeF')
                }
            })
            .catch((e) => {
                this.setState({ erroMensagem: "Não foi possível criar, tente novamente.", isLoading: false });
                console.log(e);
            })
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
        console.log([campo.target.name] + ' : ' + campo.target.value)
    }

    RodarBat = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true })

        api.get('/Infraestruturas/RodarBat')

            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ isLoading: false });
                    // this.props.history.push('/homeF');
                }
            })
            .catch(() => {
                alert('Erro ao criar')
            })
    }
    render() {
        return (
            <header>
                <div className='header-box'>
                    <div className='box-direita-header'>
                        <img className='logo-header' src={logo} alt="logo-darede" />
                    </div>
                    <div className='box-esquerda-header'>
                        <button className='button-header' onClick={() => this.setState({ isModalVisible: true })}>
                            <img className='img-header button-img' src={plus} alt="icon-cadastro-infraestrutura" />
                            <span className='button-span-header'>Nova Infraestrutura</span>
                        </button>
                        {this.state.isModalVisible ? (

                            <Modal onClose={() => this.setState({ isModalVisible: false })}>
                                <h1>Cadastrar Infraestrutura</h1>
                                <div className="modal-cadastro">
                                    <form action="submit" onSubmit={(event) => (this.CadastroInfra(event), this.RodarBat(event))  }> {/* erro 500 */}

                                        {/* <h2>Informações do Cliente</h2>
                                        <div className="input-group input-group1">
                                            <input type="text" placeholder="Nome do Cliente" 
                                            name='nomeUsuario'
                                            onChange={this.atualizaStateCampo}
                                            value={this.state.nomeUsuario}/>

                                            <input type="email" placeholder="Email"
                                            name='email' 
                                            onChange={this.atualizaStateCampo}
                                            value={this.state.email}/>
                                        </div> */}

                                        <h2>EC2</h2>
                                        <div className="input-group input-group2">
                                            <div className="input-group-column">
                                                <select
                                                 name="idInstancia"
                                                 value={this.state.idInstancia}
                                                 onChange={this.atualizaStateCampo}
                                                 required>
                                                    <option hidden value="0" label="Selecione um Tipo de Instância"/>
                                                    <option value="1" >t2.micro</option>
                                                    <option value="2" >c4.xlarge</option>
                                                </select>
                                                <select
                                                 name="idZona"
                                                 value={this.state.idZona}
                                                 onChange={this.atualizaStateCampo}
                                                 required>
                                                    <option hidden value="0" label="Selecione uma Zona"/>
                                                    <option value="1">us-east-1</option>
                                                    <option value="2">us-west-1</option>
                                                </select>
                                            </div>
                                            <div className="input-group-column">
                                                <select
                                                 name="idSoftware"
                                                 value={this.state.idSoftware}
                                                 onChange={this.atualizaStateCampo}
                                                 required>
                                                    <option hidden value="0" label="Selecione um Sistema Operacional"/>
                                                    <option value="1">Linux</option>
                                                    <option value="2">Windows</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* <h2>VPC</h2>
                                        <div className="input-group input-group2">
                                            <div className="input-group-column">
                                                <input type="text" placeholder="Ip Privado" />
                                                <input type="text" placeholder="Máscara" />
                                                <input type="text" placeholder="Gateway" />
                                            </div>
                                            <div className="input-group-column">
                                                <input type="text" placeholder="Ip Público" />
                                                <input type="text" placeholder="Máscara" />
                                                <input type="text" placeholder="Zona de Disponibilidade" />
                                            </div>
                                        </div> */}
                                        <p style={{ color: 'red' }}>{this.state.erroMensagem}</p>
                                        <button type="submit" className="btn-formL" /* onClick executar cadastro, se cadastro der certo, fechar modal; senão mostrar mensagem de erro*/ >Cadastrar</button>
                                    </form>
                                </div>
                            </Modal>) : null}
                        <button className='button-header'>
                            <img className='img-header button-img' src={filter} alt="icon-filtrar-por" />
                            <span className='button-span-header'>Filtrar por</span>
                        </button>
                        <img class='img-header icon-perfil' src={perfil} alt="icon-perfil" />
                    </div>
                </div>
            </header>
        )
    }
}
