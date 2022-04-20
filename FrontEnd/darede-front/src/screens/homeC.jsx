import { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/headerC'

import '../style/home.css'

import info from '../assets/icon-info.svg'
import star from '../assets/icon-star.svg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className='grid'>
                    <h1 className='h1-home'>Infraestruturas</h1>
                    <div className='box-list'>
                        <div className='box-infraestrutura'>
                            <div className='content-infraestrutura'>
                                <h2>Nome da Infraestrutura</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className='content-lateral'>
                                <img src={info} alt="icon-info" />
                                <img src={star} alt="star-info" />
                                {/* ativo */}
                            </div>
                        </div>
                        <div className='box-infraestrutura'>
                            <div className='content-infraestrutura'>
                                <h2>Nome da Infraestrutura</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className='content-lateral'>
                                <img src={info} alt="icon-info" />
                                <img src={star} alt="star-info" />
                                {/* ativo */}
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">botao
                    </button>

                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}