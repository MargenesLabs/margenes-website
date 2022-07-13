import React from 'react'
import { Animator, MoveIn} from 'react-scroll-motion';
import { useTranslation } from "react-i18next";

import './style.scss';

/**
 * Third page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class About
 * @extends {React.Component}
 */
function About(){
    const { t } = useTranslation();

    return(
        <div className='h-100 container-fluid d-flex flex-column'>
            <div className='mx-2 my-5'>
                <Animator animation={MoveIn(0, 1000)}>
                    <p className='col-10 about-text'>
                        {t('about-1')}<br/>
                        {t('about-2')}<br/>
                        {t('about-3')}<br/>
                        {t('about-4')}<br/>
                        {t('about-5')}<br/>
                        {t('about-6')} <span className='text-primary'>{t('Márgenes Labs')}</span> {t('about-7')}<br/>
                    </p>
                </Animator>
            </div>
        </div>
        
    );
}

export default About;