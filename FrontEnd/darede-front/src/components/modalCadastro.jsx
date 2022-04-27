import React from 'react';
import { Link } from 'react-router-dom';


export default function modalCadastro() {

    const modal = document.querySelector("#modal");
    const closeModal = document.querySelector(".close-button");
    
    closeModal.addEventListener("click", () => {
        modal.close();
      });
    
      return (
        <div>
            <div>teste backdrop</div>
            <dialog className="modal" id="modal">
                <h1>Cadastrar Infraestrutura</h1>
                <button className="close-button"></button>
                <form action="submit" method="dialog"></form>
            </dialog>
        </div>
    )
}