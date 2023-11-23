import React from 'react'
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';


export const Navbar = () => {
    return (

        <>
            <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallary">Premios</a>
                        </li>
                    </ul>
                    <a className="navbar-brand m-auto" href="#">
                        <img src="/imgs/logo.png" className="brand-img" alt="" />
                        <span className="brand-txt">Vip Food</span>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home"><LoginTwoToneIcon sx={{ mx: 1 }} />Ingresar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Registrarse</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
