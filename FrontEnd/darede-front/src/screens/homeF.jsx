import { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderF from '../components/headerF'

import '../style/home.css'

import info from '../assets/icon-info.svg'
import star from '../assets/icon-star.svg'

function HomeF() {
    return (
        <div>
            <HeaderF></HeaderF>
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
            </div>
        </div>
    )
}

export default HomeF;