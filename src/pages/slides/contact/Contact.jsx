import React from 'react'
import Button from 'react-bootstrap/Button'
import Lenguage from '../../../components/enum/Lenguage'

import './style.scss'

import logo from '../../../assets/images/logo/original/small.png'

const BUTTON_1 = {
    "ES":
    <>
    ESCRÍBENOS
    </>,
    "EN":
    <>
    En ingles.
    </>
}
const BUTTON_2 = {
    "ES":
    <>
    ÚNETE
    </>,
    "EN":
    <>
    En ingles.
    </>
}

const INFO_1 = {
    "ES":
    <>
    <u>PROYECTOS</u><br/>
    AMÉRICA DE CALI<br/>
    DIMAYOR<br/>
    SELECCIÓN COLOMBIA<br/>
    VÉLEZ<br/>
    </>,
    "EN":
    <>
    En ingles.
    </>
}
const INFO_2 = {
    "ES":
    <>
    <u>MÁS DE NOSOTROS</u><br/>
    <a href='https://margenes.com.co/' target="_blank" rel="noopener noreferrer">BANCA DE INVERSIÓN</a><br/>
    <a href='https://opensea.io/mglabs' target="_blank" rel="noopener noreferrer">OPEN SEA</a><br/>
    <a href='https://medium.com/@margeneslabs' target="_blank" rel="noopener noreferrer">VLOG</a><br/>
    <a href='https://linktr.ee/margeneslabs' target="_blank" rel="noopener noreferrer">PODCAST</a><br/>
    </>,
    "EN":
    <>
    En ingles.
    </>
}
const INFO_3 = {
    "ES":
    <>
    <u>SEGUINOS</u>
    <br/><a href='https://twitter.com/margeneslabs' target="_blank" rel="noopener noreferrer">TWITTER</a>
    <br/><a href='https://www.linkedin.com/company/margeneslabs/about/' target="_blank" rel="noopener noreferrer">LINKEDIN</a>
    <br/><a href='https://www.instagram.com/margeneslabs/' target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
    <br/><a href='https://www.youtube.com/channel/UCeZEjAcGQ21k0GPZv76ZLkA' target="_blank" rel="noopener noreferrer">YOUTUBE</a>
    
    </>,
    "EN":
    <>
    En ingles.
    </>
}

/**
 * Fifth page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 */
function Contact({
    lenguage
})
{
    const checkLenguage = lenguage != null && Lenguage.ENUM[lenguage] instanceof Lenguage ?
    lenguage : 'ES';

    return(
        <div className='container-fluid d-flex flex-column'>
            <div className='font-codesaver'>
                <div className='d-flex justify-content-center my-3'>
                    <img src={logo} className='contact-logo' alt="logo" />
                    <h1><u>®</u></h1>
                </div>
                <div className='row d-flex justify-content-center my-5'>
                    <Button variant="secondary" size='lg' className='col-2 rounded-0 contact-text-button' href="mailto:hello@margeneslabs.io">{BUTTON_1[checkLenguage]}</Button>
                    <div className='col-2 contact-middle-button'></div>
                    <Button variant="secondary" size='lg' className='col-2 rounded-0 contact-text-button' href="mailto:hello@margeneslabs.io">{BUTTON_2[checkLenguage]}</Button>
                </div>
                <div className='row d-flex justify-content-center text-center contact-text-info my-5'>
                    {/* <p className='col-3 mx-4'>
                        {INFO_1[checkLenguage]}
                    </p> */}
                    <p className='col-4 mx-3'>
                        {INFO_2[checkLenguage]}
                    </p>
                    <p className='col-4 mx-3'>
                        {INFO_3[checkLenguage]}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;