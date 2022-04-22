import React from 'react'

/**
 * Fourth page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class Examples
 * @extends {React.Component}
 */
class Examples extends React.Component {
    render(){
        return(
            <>
                <div className='row justify-content-center'>
                    <div className='col d-flex align-items-center'>
                        <img className='example' src={require("../../assets/images/img_1.jpg")} alt="img_1"/>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <img className='example' src={require("../../assets/images/img_2.jpg")} alt="img_2"/>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <img className='example' src={require("../../assets/images/img_3.jpg")} alt="img_3"/>
                    </div>
                </div>
                
            </>
        );
    }
}

export default Examples;