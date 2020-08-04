import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/63420973?s=400&u=024e91a4f5cd27b40a7505a159a29093c7f5fff0&v=4" alt="Leonardo Figueira"/>
        <div>
          <strong>Leonardo Figueira</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Melhores aulas do assunto!
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;