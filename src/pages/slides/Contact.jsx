import React from 'react'
import Button from 'react-bootstrap/Button'
import Lenguage from '../../components/enum/Lenguage'

const TITLE = {
    "ES":
    <>
    CONTÁCTANOS
    </>,
    "EN":
    <>
    En ingles.
    </>
}

const BUTTON_1 = {
    "ES":
    <>
    Escríbenos un Mail
    </>,
    "EN":
    <>
    En ingles.
    </>
}
const BUTTON_2 = {
    "ES":
    <>
    Únete a Nosotros
    </>,
    "EN":
    <>
    En ingles.
    </>
}

const INFO_1 = {
    "ES":
    <>
    <u>Proyectos</u><br/>
    América de Cali<br/>
    Dimayor<br/>
    Selección Colombia<br/>
    </>,
    "EN":
    <>
    En ingles.
    </>
}
const INFO_2 = {
    "ES":
    <>
    <u>Más de nosotros</u><br/>
    Open Sea<br/>
    Press<br/>
    Podcast<br/>
    Márgenes.com.co<br/>
    </>,
    "EN":
    <>
    En ingles.
    </>
}
const INFO_3 = {
    "ES":
    <>
    <u>Seguinos</u><br/>
    Twitter<br/>
    LinkedIn<br/>
    Instagram<br/>
    Spotify<br/>
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
        <>
            <div className='row text-center text-contact-title my-2'>
                <p>{TITLE[checkLenguage]}</p>
            </div>
            <div className='row justify-content-around my-2'>
                <Button variant="secondary" size='lg' className='col-5 rounded-pill text-contact-button' href="mailto:hello@margeneslabs.io">{BUTTON_1[checkLenguage]}</Button>
                <Button variant="secondary" size='lg' className='col-5 rounded-pill text-contact-button' href="mailto:hello@margeneslabs.io">{BUTTON_2[checkLenguage]}</Button>
            </div>
            <div className='row text-center text-contact-info my-2'>
                <div className='col'>
                    <p>
                        {INFO_1[checkLenguage]}
                    </p>
                </div>
                <div className='col'>
                    <p>
                        {INFO_2[checkLenguage]}
                    </p>
                    
                </div>
                <div className='col'>
                    <p>
                        {INFO_3[checkLenguage]}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Contact;