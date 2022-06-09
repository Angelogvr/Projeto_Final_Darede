import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Modal from '../components/modal'
import HeaderF from '../components/headerF';

import '../style/home.css'

import info from '../assets/icon-info.svg'
import star from '../assets/icon-star.svg'


function HomeC() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <HeaderF></HeaderF>
      <div className='grid'>
        <h1 className='h1-home'>Infraestruturas</h1>
        <div className='box-list'>
          <div className='box-infraestrutura'>
            <div className='content-infraestrutura'>
              <h2>Infraestrutura 4RP</h2>
              <div className='gambiarra'>
                <p>Tipo de Instância: c4.xlarge</p>
                <p>Zona de Disponibilidade: us-east-1</p>
                <p>Sistema Operacional: Windows</p>
              </div>
            </div>
            <div className='content-lateral'>
              {/* <button onClick={() => this.setState({ isModalVisible: true })}>
                <img src={info} alt="icon-info" />
              </button> */}
              <button>
                <img src={star} alt="star-info" />
              </button>
              {/* ativo */}
            </div>
          </div>
          {isModalVisible ?

            <Modal>
              <h1>Informações da Infraestrutura</h1>
            </Modal> : null}
          <div className='box-infraestrutura'>
            <div className='content-infraestrutura'>
              <h2>Infraestrutura Loggex</h2>
              <div className='gambiarra'>
                <p>Tipo de Instância: t2.micro</p>
                <p>Zona de Disponibilidade: us-west-1</p>
                <p>Sistema Operacional: Linux</p>
              </div>
            </div>
            <div className='content-lateral'>
              {/* <button onClick={() => this.setState({ isModalVisible: true })}>
                <img src={info} alt="icon-info" />
              </button> */}
              <button>
                <img src={star} alt="star-info" />
              </button>
              {/* ativo */}
            </div>
          </div>
          <div className='box-infraestrutura'>
            <div className='content-infraestrutura'>
              <h2>Nova Infraestrutura</h2>
              <div className='gambiarra'>
                <p>Tipo de Instância: t2.micro</p>
                <p>Zona de Disponibilidade: us-east-1</p>
                <p>Sistema Operacional: Windows</p>
              </div>
            </div>
            <div className='content-lateral'>
              {/* <button>
                <img src={info} alt="icon-info" />
              </button> */}
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

export default HomeC;