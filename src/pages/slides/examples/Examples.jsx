import React from 'react'

import './style.scss'

const max = 6;
const min = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * Fourth page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class Examples
 * @extends {React.Component}
 */
class Examples extends React.Component {
    render(){
        var number1 = getRandomInt(min, max+1);
        var number2 = (number1 + 1) % max;
        number2 = number2 == 0 ? max : number2;
        var number3 = (number1 + 2) % max;
        number3 = number3 == 0 ? max : number3;

        return(
            <div className='container-fluid d-flex flex-column'>
                <div className='row justify-content-center'>
                    <div className='col-4 d-flex align-items-center'>
                        <a href='https://opensea.io/mglabs' target="_blank" rel="noopener noreferrer">
                            <img className='examples-image' src={require("../../../assets/images/nft/IMG_"+number1+".png")} alt="img_1"/>
                        </a>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <a href='https://opensea.io/mglabs' target="_blank" rel="noopener noreferrer">
                            <img className='examples-image' src={require("../../../assets/images/nft/IMG_"+number2+".png")} alt="img_2"/>
                        </a>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <a href='https://opensea.io/mglabs' target="_blank" rel="noopener noreferrer">
                            <img className='examples-image' src={require("../../../assets/images/nft/IMG_"+number3+".png")} alt="img_3"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Examples;