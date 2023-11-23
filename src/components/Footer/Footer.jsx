import React from 'react'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
                <div className="row">
                    <div className="col-sm-4">
                        <h3><MailOutlineTwoToneIcon sx={{ mx: 1 }} />E-mail</h3>
                        <p className="text-muted">info@vipfood.com</p>
                    </div>
                    <div className="col-sm-4">
                        <h3><LocalPhoneTwoToneIcon sx={{ mx: 1 }} />Contacto</h3>
                        <p className="text-muted">+593 000 00 0000</p>
                    </div>
                    <div className="col-sm-4">
                        <h3><LocationOnTwoToneIcon sx={{ mx: 1 }} />Encuentranos</h3>
                        <p className="text-muted">Direccion paquito reyes</p>
                    </div>
                </div>
            </div>


        </>
    )
}
