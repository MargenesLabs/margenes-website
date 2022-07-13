import React from 'react'
import { Animator, MoveIn } from 'react-scroll-motion';
import { useTranslation } from "react-i18next";

import './style.scss'

/**
 * Second page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class Subtitle
 * @extends {React.Component}
 */
function Subtitle(){
    const { t } = useTranslation();

    return(
        <div className='h-100 container-fluid d-flex flex-column'>
            <div className='mx-2 my-5'>
                <p className='col subtitle-text'>
                    <Animator animation={MoveIn(0, 1000)}>{t('subtitle-1')}</Animator>
                    <Animator animation={MoveIn(0, 2000)}>{t('subtitle-2')}</Animator>
                    <Animator animation={MoveIn(0, 3000)}>{t('subtitle-3')}</Animator>
                    <Animator animation={MoveIn(0, 4000)}>{t('subtitle-4')}</Animator>
                    <Animator animation={MoveIn(0, 5000)}>{t('subtitle-5')}</Animator>
                    <Animator animation={MoveIn(0, 6000)}><span className='text-primary'>{t('subtitle-6')}</span></Animator>
                </p>
            </div>
        </div>
    );
}

export default Subtitle;