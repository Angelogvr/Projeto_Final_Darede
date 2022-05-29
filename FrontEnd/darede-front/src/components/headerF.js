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
            nomeUsuario: '',
            email: '',
            idInfraestrutura: '',
            idUsuario: '1',
            idZona: '1',
            idInstancia: '1',
            idSoftware: '1',
            topologiaImagem: 'd',
            ipPrivado: 'd',
            mascaraPrivado: 'd',
            ipPublico: 'd',
            mascaraPublico: 'd',
            gateway: 'd',
            mascaraGateway: 'd',
            ativo: 'true'
        };
    };

    CadastroInfra = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true })

        api.post('http://localhost:5000/api/Infraestruturas', {
            idInfraestrutura: this.state.idInfraestrutura,
            idUsuario: this.state.idUsuario,
            idZona: this.state.idZona,
            idInstancia: this.state.idInstancia,
            idSoftware: this.state.idSoftware,
            topologiaImagem: this.state.topologiaImagem,
            ipPrivado: this.state.ipPrivado,
            mascaraPrivado: this.state.mascaraPrivado,
            ipPublico: this.state.ipPublico,
            mascaraPublico: this.state.mascaraPublico,

        })

        .then(resposta => {
            if(resposta.status === 201) {
                this.setState({ isLoading: false });
                alert('Cadastro Realizado')
                console.log('cadastrado')
                this.props.history.push('/homeF')
            }
        })
        .catch(() => {
            this.setState({ erroMensagem: "erro", isLoading: false });
            console.log('erro')
          })
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
        console.log([campo.target.name] + ' : ' + campo.target.value)
      }

    RodarBat = (event) => {
        event.preventDefault();

        this.setState({ isLoading: true })

        api.get('http://localhost:5000/api/Infraestruturas/RodarBat')

            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ isLoading: false });
                    // this.props.history.push('/homeF');
                    // alert("cu")
                }
            })
            .catch(() => {
                this.setState({ erroMensagem: "Esta Infraestrutura não foi cadastrada, tente novamente.", isLoading: false });
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
                                    <form action="submit" onSubmit={this.CadastroInfra}>

                                        <h2>Informações do Cliente</h2>
                                        <div className="input-group input-group1">
                                            <input type="text" placeholder="Nome do Cliente" 
                                            name='nomeUsuario'
                                            onChange={this.atualizaStateCampo}
                                            value={this.state.nomeUsuario}/>

                                            <input type="email" placeholder="Email"
                                            name='email' 
                                            onChange={this.atualizaStateCampo}
                                            value={this.state.email}/>
                                        </div>

                                        <h2>EC2</h2>
                                        <div className="input-group input-group2">
                                            <div className="input-group-column">
                                                <input type="text" placeholder="Zona de Disponibilidade" 
                                                name='idZona'
                                                onChange={this.atualizaStateCampo}
                                                value={this.state.idZona}/>

                                                <input type="text" placeholder="Sistema Operacional" 
                                                name='idSoftware'
                                                onChange={this.atualizaStateCampo}
                                                value={this.state.idSoftware}/>

                                                {/* <input type="text" placeholder="Tipo de Instância" /> */}
                                            </div>
                                            <div className="input-group-column">
                                                {/* <input type="text" placeholder="Sistema Operacional" /> */}
                                                <input type="text" placeholder="Tipo de Instância" 
                                                name='idInstancia'
                                                onChange={this.atualizaStateCampo}
                                                value={this.state.idInstancia}/>

                                                {/* <input type="text" placeholder="CPU" /> */}
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
                                        <button type="submit" className="btn-formL" onClick={(e) => this.RodarBat(e)}/* onClick executar cadastro, se cadastro der certo, fechar modal; senão mostrar mensagem de erro*/ >Cadastrar</button>
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
