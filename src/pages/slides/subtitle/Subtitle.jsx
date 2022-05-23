import React from 'react'
import { Animator, MoveIn } from 'react-scroll-motion';

import './style.scss'

const TEXT = {
    "ES":
    <>
    CREANDO EL
    METAVERSO
    A TRAVÉS DE
    EXPERIENCIAS,
    COMUNIDADES,
    <span className='text-primary'> IMAGINACIÓN.</span>
    </>,
    "EN":
    <>
    <Animator animation={MoveIn(0, 1000)}>CREANDO EL</Animator>
    <Animator animation={MoveIn(0, 2000)}>METAVERSO</Animator>
    <Animator animation={MoveIn(0, 3000)}>A TRAVÉS DE</Animator>
    <Animator animation={MoveIn(0, 4000)}>EXPERIENCIAS,</Animator>
    <Animator animation={MoveIn(0, 5000)}>COMUNIDADES,</Animator>
    <Animator animation={MoveIn(0, 6000)}><span className='text-primary'> IMAGINACIÓN.</span></Animator>
    </>
}

/**
 * Second page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class Subtitle
 * @extends {React.Component}
 */
class Subtitle extends React.Component {
    
    render(){
        return(
            
            <div className='h-100 container-fluid d-flex flex-column'>
                <div className='mx-2 my-5'>
                    <p className='col subtitle-text'>
                        {TEXT["EN"]}
                    </p>
                </div>
            </div>

        );
    }
}

export default Subtitle;