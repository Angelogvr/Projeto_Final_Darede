import { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderF from '../components/headerF'

import '../style/home.css'

import info from '../assets/icon-info.svg'
import star from '../assets/icon-star.svg'
import arrow from '../assets/icon-arrow.svg'
import Modal from '../components/modal';

export default class HomeF extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isModalVisible: false,
        };
    }
    render() {
        return (
            <div>
                <HeaderF></HeaderF>
                <div className='grid'>
                    <h1 className='h1-home'>Infraestruturas</h1>
                    <div className='box-list'>
                        <div className='box-infraestrutura'>
                            <div className='content-infraestrutura'>
                                <h2>Infraestrutura Loggex</h2>
                                <p>Infraestrutura da empresa Loggex para hospedar o site e aplicativo do seu serviço contém serviços como IIS e DNS para hospedagem dos mesmos.</p>
                            </div>
                            <div className='content-lateral'>
                                <button onClick={() => this.setState({ isModalVisible: true })}>
                                    <img src={info} alt="icon-info" />
                                </button>
                                <button>
                                    <img src={star} alt="star-info" />
                                </button>
                                {/* ativo */}
                            </div>
                            {this.state.isModalVisible ? (
                                <Modal onClose={() => this.setState({ isModalVisible: false })}>
                                    <div className="info-modal">
                                        <h1>Informações da Infraestrutura</h1>
                                        <div className="info-box">
                                            <div className="info-container">
                                                <div className="info-content">
                                                    <button><img src={arrow} alt="" className="arrow" /></button>
                                                    <h3>Informações do cliente</h3>
                                                </div>
                                            </div>
                                            <div className="info-container">
                                                <div className="info-content">
                                                    <button><img src={arrow} alt="" className="arrow" /></button>
                                                    <h3>Informações do servidor</h3>
                                                </div>
                                            </div>
                                            <div className="info-container">
                                                <div className="info-content">
                                                    <button><img src={arrow} alt="" className="arrow" /></button>
                                                    <h3>Informações da rede</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>) : null}
                        </div>
                        <div className='box-infraestrutura'>
                            <div className='content-infraestrutura'>
                                <h2>Infraestrutura 4RP</h2>
                                <p>Infraestrutura da empresa 4RP para uso corporativo. Contém serviços como AD, para fazer o controle de usuários dos funcionários, DNS, DHCP, IIS, para hospedar os sites para uso da empresa.</p>
                            </div>
                            <div className='content-lateral'>
                                <button onClick={() => this.setState({ isModalVisible: true })}>
                                    <img src={info} alt="icon-info" />
                                </button>
                                <button>
                                    <img src={star} alt="star-info" />
                                </button>
                                {/* ativo */}
                            </div>
                            {this.state.isModalVisible ? (
                                <Modal onClose={() => this.setState({ isModalVisible: false })}>
                                    <div className="info-modal">
                                        <h1>Informações da Infraestrutura</h1>
                                        <div className="info-box">
                                            <div className="info-container">
                                                <div className="info-content">
                                                    <button><img src={arrow} alt="" className="arrow" /></button>
                                                    <h3>Informações do cliente</h3>
                                                </div>
                                            </div>
                                            <div className="info-container">
                                                <div className="info-content">
                                                    <button><img src={arrow} alt="" className="arrow" /></button>
                                                    <h3>Informações do servidor</h3>
                                                </div>
                                            </div>
                                            <div className="info-container">
                                                <div className="info-content">
                                                    <button><img src={arrow} alt="" className="arrow" /></button>
                                                    <h3>Informações da rede</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>) : null}
                        </div>
                        <div className='box-infraestrutura'>
                            <div className='content-infraestrutura'>
                                <h2>Infraestrutura C NAI</h2>
                                <p>Infraestrutura da instituição de ensino C NAI. Serviços para hospedagem de sites com Informações das escolas e, controle de dados dos alunos e funcionários.</p>
                            </div>
                            <div className='content-lateral'>
                                <button>
                                    <img src={info} alt="icon-info" />
                                </button>
                                <button>
                                    <img src={star} alt="star-info" />
                                </button>
                                {/* ativo */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}