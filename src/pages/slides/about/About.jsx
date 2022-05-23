import React from 'react'
import { Animator, batch, FadeIn, MoveIn} from 'react-scroll-motion';

import './style.scss';

const TEXT = {
    "ES":
    <>
    Creemos en el poder de la comunidad.<br/>
    En el Metaverso las posibilidades son
    ilimitadas para todos.<br/>
    La creatividad es la única regla 
    y la imaginación el único límite.<br/>
    Todos somos dueños y creadores.<br/>
    Artistas y admiradores, clientes y emprendedores;
    aquí todos juegan en el mismo equipo.<br/>
    En <span className='text-primary'>Márgenes Labs</span> acercamos al mundo a un espacio que le pertenece a todos.<br/>
    </>,
    "EN":
    <>
    <Animator animation={batch(FadeIn(-1,1))}>Creemos en el poder de la comunidad.</Animator>
    <Animator animation={batch(FadeIn(-6,1))}>En el <span className='text-primary'>Metaverso</span> las posibilidades son
    ilimitadas para todxs.</Animator>
    <Animator animation={batch(FadeIn(0.75,1),)}>La creatividad es la única regla
    y la imaginación el unico límite.</Animator>
    <Animator animation={batch(FadeIn(-3,1))}>Todos somos dueños y creadores.</Animator>
    <Animator animation={batch(FadeIn(-15,1))}>Artistas y admiradores, clientes y emprendedores;
    aquí todxs juegan en el mismo equipo.</Animator>
    <Animator animation={batch(FadeIn(0,1))}>En <span className='text-primary'>Márgenes Labs</span> acercamos el mundo a
    un espacio que le pertenece a <span className='text-primary'>todxs</span>.</Animator>
    </>,
}

/**
 * Third page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class About
 * @extends {React.Component}
 */
class About extends React.Component {
    render(){
        return(
            <div className='h-100 container-fluid d-flex flex-column'>
                <div className='mx-2 my-5'>
                    <Animator animation={MoveIn(0, 1000)}>
                        <p className='col-10 about-text'>
                            {TEXT["ES"]}
                        </p>
                    </Animator>
                </div>
            </div>
            
        );
    }
}

export default About;