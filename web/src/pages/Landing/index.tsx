import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // a tag
import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections')
      .then(res => {
        const { total } = res.data;

        setTotalConnections(total);
      })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className='container'>
        <div className="logo-container">
          <img src={logoImg} alt="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
      
        {/* <div className="page-landing-footer-text">
          <p>Seja bem vindo.</p>
          <p>O que deseja fazer?</p>
        </div> */}

        <div className="buttons-container">
          <Link to="/study" className='study'>
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-class" className='give-classes'>
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
        <span className="total-conections">
          Total de {totalConnections} conexões <br/> já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>

    </div>
  )
}

export default Landing;