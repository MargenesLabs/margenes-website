import React from 'react'

import './style.scss'

const NFTS = [
    {name:"1",image:"IMG_1", link:"https://opensea.io/mglabs"},
    {name:"2",image:"IMG_2", link:"https://opensea.io/mglabs"},
    {name:"3",image:"IMG_3", link:"https://opensea.io/mglabs"},
    {name:"4",image:"IMG_4", link:"https://opensea.io/mglabs"},
    {name:"5",image:"IMG_5", link:"https://opensea.io/mglabs"},
    {name:"6",image:"IMG_6", link:"https://opensea.io/mglabs"},
];

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
        var max = NFTS.length-1;

        var number1 = getRandomInt(0, NFTS.length);
        var number2 = (number1 + 1) % max;
        number2 = number2 === 0 ? max : number2;
        var number3 = (number1 + 2) % max;
        number3 = number3 === 0 ? max : number3;

        return(
            <div className='container-fluid d-flex flex-column'>
                <div className='row justify-content-center'>
                    <div className='col-4 d-flex align-items-center'>
                        <a href={NFTS[number1].link} target="_blank" rel="noopener noreferrer">
                            <img className='examples-image' src={require("../../../assets/images/nft/"+NFTS[number1].image+".png")} alt="img_1"/>
                        </a>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <a href={NFTS[number2].link} target="_blank" rel="noopener noreferrer">
                            <img className='examples-image' src={require("../../../assets/images/nft/"+NFTS[number2].image+".png")} alt="img_2"/>
                        </a>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <a href={NFTS[number3].link} target="_blank" rel="noopener noreferrer">
                            <img className='examples-image' src={require("../../../assets/images/nft/"+NFTS[number3].image+".png")} alt="img_3"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Examples;