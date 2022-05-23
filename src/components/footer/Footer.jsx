import React from 'react'

import './style.scss'

import darkLogo from '../../assets/images/logo/footer/secondary.png'
import lightLogo from '../../assets/images/logo/footer/light.png'

/**
 * Footer of the pages.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 */
function Footer ({
    theme,
}){
    const checkLogo = theme === 'light' ?
    darkLogo : lightLogo;

    return(
        <div className={'d-flex justify-content-end my-2 mx-4'}>
            <img src={checkLogo} className='footer-logo' alt="logo" />
        </div>
    );
}

export default Footer;