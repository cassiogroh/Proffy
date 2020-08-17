import React from 'react';

import './styles.css';

// import logo from '../../assets/images/logo.svg';
import succesBg from '../../assets/images/success-background.svg';

const Register = () => {
  return (
    <div id="page-register">
      <div className="register-form">
        <h2>Cadastro</h2>

        <p>Preencha os dados abaixo para começar</p>

        <form>
          <input type="text" placeholder='Nome'/>
          <input type="text" placeholder='Sobrenome'/>
          <input type="text" placeholder='E-mail'/>
          <input type="text" placeholder='Senha'/>
        </form>
      </div>

      <div className="logo-container-register">
        <img src={succesBg} alt="Bg"/>
        <h2>Sua plataforma de estudos online.</h2>
      </div>
    </div>
  )
};

export default Register;