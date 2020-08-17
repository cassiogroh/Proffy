import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';

import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string;
    description2?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ( {title, description, description2, children} ) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to='/'>
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                
                <div className="description">
                    { description && <p>{description}</p>}
                    <div className="description2">
                        <img src={rocketIcon} alt="Foguete"/>
                        { description2 && <p>{description2}</p>}
                    </div>
                </div>

                {children}
            </div>
        </header>
    )
}

export default PageHeader;