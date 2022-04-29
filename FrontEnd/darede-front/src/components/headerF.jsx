import React from 'react';
import { Link } from 'react-router-dom';
import { Component, useState } from 'react';

import Modal from '../components/modal'

import logo from '../assets/logo-darede.svg'
import perfil from '../assets/icon-perfil.svg'
import plus from '../assets/icon-plus.svg'
import filter from '../assets/icon-filter.svg'

import '../style/header.css'

export default function HeaderF() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <header>
            <div className='header-box'>
                <div className='box-direita-header'>
                    <img className='logo-header' src={logo} alt="logo-darede" />
                </div>
                <div className='box-esquerda-header'>
                    <button className='button-header' onClick={() => setIsModalVisible(true)}>
                        <img className='img-header button-img' src={plus} alt="icon-cadastro-infraestrutura" />
                        <span className='button-span-header'>Nova Infraestrutura</span>
                    </button>
                    {isModalVisible ?

                        <Modal>
                            <h1>Cadastrar Infraestrutura</h1>
                            
                        </Modal> : null}
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