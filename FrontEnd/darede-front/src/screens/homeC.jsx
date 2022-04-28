import { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal;'

import HeaderC from '../components/headerC';

import '../style/home.css'

import info from '../assets/icon-info.svg'
import star from '../assets/icon-star.svg'


export default class Home extends Component {

  // constructor () {
  //   super();
  //   this.state = {
  //     showModal: false
  //   };
    
  //   this.handleOpenModal = this.handleOpenModal.bind(this);
  //   this.handleCloseModal = this.handleCloseModal.bind(this);
  // }
  
  // handleOpenModal () {
  //   this.setState({ showModal: true });
  // }
  
  // handleCloseModal () {
  //   this.setState({ showModal: false });
  // }

  render() {
    return (
      <div>
        <HeaderC></HeaderC>
        <div className='grid'>
          <h1 className='h1-home'>Infraestruturas</h1>
          <div className='box-list'>
            <div className='box-infraestrutura'>
              <div className='content-infraestrutura'>
                <h2>Nome da Infraestrutura</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className='content-lateral'>
                <button onClick={this.handleOpenModal}>
                  <img src={info} alt="icon-info" />
                </button>
                <button>
                  <img src={star} alt="star-info" />
                </button>
                {/* ativo */}
              </div>
            </div>
            <div className='box-infraestrutura'>
              <div className='content-infraestrutura'>
                <h2>Nome da Infraestrutura</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
