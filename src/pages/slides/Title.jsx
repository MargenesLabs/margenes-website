import React from 'react'
import logo from '../../assets/images/logo.svg';

/**
 * First page.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class Title
 * @extends {React.Component}
 */
class Title extends React.Component {
    render(){
        return(
            <>
                <div className='d-flex justify-content-start'>
                    <h1 className='text-white text-subtitle'>MÁRGENES LABS</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={logo} className='app-logo' alt="logo" />
                </div>
            </>
        );
    }
}

export default Title;