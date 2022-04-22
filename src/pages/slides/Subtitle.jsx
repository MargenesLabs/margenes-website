import React from 'react'
import { Animator, MoveIn } from 'react-scroll-motion';

const TEXT = {
    "ES":
    <>
    CREANDO EL
    METAVERSO
    A TRAVÉS DE
    EXPERIENCIAS,
    COMUNIDADES,
    <span class='text-primary'> IMAGINACIÓN.</span>
    </>,
    "EN":
    <>
    <Animator animation={MoveIn(0, 1000)}>CREANDO EL</Animator>
    <Animator animation={MoveIn(0, 2000)}>METAVERSO</Animator>
    <Animator animation={MoveIn(0, 3000)}>A TRAVÉS DE</Animator>
    <Animator animation={MoveIn(0, 4000)}>EXPERIENCIAS,</Animator>
    <Animator animation={MoveIn(0, 5000)}>COMUNIDADES,</Animator>
    <Animator animation={MoveIn(0, 6000)}><span class='text-primary'> IMAGINACIÓN.</span></Animator>
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
            <>
                <p class='col text-white text-subtitle'>
                    {TEXT["EN"]}
                </p>
            </>
        );
    }
}

export default Subtitle;