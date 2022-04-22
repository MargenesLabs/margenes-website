import React from 'react'
import { Animator, batch, FadeIn} from 'react-scroll-motion';

const TEXT = {
    "ES":
    <>
    Creemos en el poder de la comunidad.<br/>
    En el <span class='text-primary'>Metaverso</span> las posibilidades son
    ilimitadas para todxs.<br/>
    La creatividad es la única regla
    y la imaginación el unico límite.<br/>
    Todos somos dueños y creadores.<br/>
    Artistas y admiradores, clientes y emprendedores;
    aquí todxs juegan en el mismo equipo.<br/>
    En <span class='text-primary'>Márgenes Labs</span> acercamos el mundo a
    un espacio que le pertenece a <span class='text-primary'>todxs</span>.
    </>,
    "EN":
    <>
    <Animator animation={batch(FadeIn(-1,1))}>Creemos en el poder de la comunidad.</Animator>
    <Animator animation={batch(FadeIn(-6,1))}>En el <span class='text-primary'>Metaverso</span> las posibilidades son
    ilimitadas para todxs.</Animator>
    <Animator animation={batch(FadeIn(0.75,1))}>La creatividad es la única regla
    y la imaginación el unico límite.</Animator>
    <Animator animation={batch(FadeIn(-3,1))}>Todos somos dueños y creadores.</Animator>
    <Animator animation={batch(FadeIn(-15,1))}>Artistas y admiradores, clientes y emprendedores;
    aquí todxs juegan en el mismo equipo.</Animator>
    <Animator animation={batch(FadeIn(0,1))}>En <span class='text-primary'>Márgenes Labs</span> acercamos el mundo a
    un espacio que le pertenece a <span class='text-primary'>todxs</span>.</Animator>
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
            <>
                <p class='col text-about'>
                    {TEXT["EN"]}
                </p>
            </>
        );
    }
}

export default About;