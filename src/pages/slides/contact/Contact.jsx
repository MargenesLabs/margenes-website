import React from 'react'
import Button from 'react-bootstrap/Button'

import { useTranslation } from 'react-i18next'

import './style.scss'

import logo from '../../../assets/images/logo/original/small.png'

/**
 * Fifth page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 */
function Contact(){
    const { t } = useTranslation();

    return(
        <div className='container-fluid d-flex flex-column'>
            <div className='font-codesaver'>
                <div className='d-flex justify-content-center my-3'>
                    <img src={logo} className='contact-logo' alt="logo" />
                    <h1><u>®</u><br/></h1>
                </div>
                <div className='row d-flex justify-content-center my-5'>
                    <Button variant="secondary" size='lg' className='col-2 rounded-0 contact-text-button contact-link' href="mailto:hello@margeneslabs.io">{t('contact-button-1')}</Button>
                    <div className='col-2 contact-middle-button'></div>
                    <Button variant="secondary" size='lg' className='col-2 rounded-0 contact-text-button' href="mailto:hello@margeneslabs.io">{t('contact-button-2')}</Button>
                </div>
                <div className='row d-flex justify-content-center text-center contact-text-info my-5'>
                    {/* <p className='col-3 mx-4'>
                        <u>{t('contact-proyect')}</u><br/>
                        AMÉRICA DE CALI<br/>
                        DIMAYOR<br/>
                        SELECCIÓN COLOMBIA<br/>
                        VÉLEZ<br/>
                    </p> */}
                    {/*MORE*/}
                    <p className='col-4 mx-2 hide-on-landscape'>
                        <u>{t('contact-more')}</u><br/>
                        <a href='https://margenes.com.co/' target="_blank" rel="noopener noreferrer">BANCA</a><br/>
                        <a href='https://opensea.io/mglabs' target="_blank" rel="noopener noreferrer">OPEN SEA</a><br/>
                        <a href='https://medium.com/@margeneslabs' target="_blank" rel="noopener noreferrer">VLOG</a><br/>
                        <a href='https://linktr.ee/margeneslabs' target="_blank" rel="noopener noreferrer">PODCAST</a><br/>
                    </p>
                    <p className='col-4 mx-2 hide-on-portrait'>
                        <u>{t('contact-more')}</u><br/>
                        <a href='https://margenes.com.co/' target="_blank" rel="noopener noreferrer">BANCA DE INVERSIÓN</a><br/>
                        <a href='https://opensea.io/mglabs' target="_blank" rel="noopener noreferrer">OPEN SEA</a><br/>
                        <a href='https://medium.com/@margeneslabs' target="_blank" rel="noopener noreferrer">VLOG</a><br/>
                        <a href='https://linktr.ee/margeneslabs' target="_blank" rel="noopener noreferrer">PODCAST</a><br/>
                    </p>
                    {/*FOLLOW*/}
                    <p className='col-4 mx-2'>
                        <u>{t('contact-follow')}</u><br/>
                        <a href='https://twitter.com/margeneslabs' target="_blank" rel="noopener noreferrer">TWITTER</a><br/>
                        <a href='https://www.linkedin.com/company/margeneslabs/about/' target="_blank" rel="noopener noreferrer">LINKEDIN</a><br/>
                        <a href='https://www.instagram.com/margeneslabs/' target="_blank" rel="noopener noreferrer">INSTAGRAM</a><br/>
                        <a href='https://www.youtube.com/channel/UCeZEjAcGQ21k0GPZv76ZLkA' target="_blank" rel="noopener noreferrer">YOUTUBE</a><br/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;