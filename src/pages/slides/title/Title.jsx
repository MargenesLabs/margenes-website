import React from 'react'
import ReactiveLogo from '../../../components/reactiveLogo/ReactiveLogo';

import './style.scss';

import logo from '../../../assets/images/logo/original/small.png'

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
                {/* <div className='fixed-top d-flex justify-content-start m-4'>
                    <h1 className='title-text'>MÁRGENES LABS</h1>
                </div> */}
                <div className='container-fluid d-flex flex-column'>
                    <div className='d-flex justify-content-center'>
                        <div className='h-75 w-75'>
                            <ReactiveLogo imageSrc={logo}/>
                        </div>
                    </div>
                </div>
                
            </>
        );
    }
}

export default Title;