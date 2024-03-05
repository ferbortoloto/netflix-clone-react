import React from "react";
import './Header.css';

export default ( {black} ) => {
    return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
                <a href="/">
                    <img src="/assets/img/Logo.png" alt="Netlix"/>
                </a>
            </div>
            <div className="header--user">
            <a href="/">
                    <img src="/assets/img/Perfil.png" alt="Usuario"/>
                </a>
            </div>
    </header>
    );
}