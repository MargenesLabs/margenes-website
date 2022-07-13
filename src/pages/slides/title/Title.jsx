import React from 'react'
import ReactiveLogo from '../../../components/reactiveLogo/ReactiveLogo';

import './style.scss';

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
                <div className="pane hide-on-portrait">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className='pane row'>
                        <ReactiveLogo className="col" glb='logo-1.glb' visible={true} cameraR={{position:[0,0,200], fov: 1}}/>
                        <p className='col-1'></p>
                    </div>
                </div>
                <div className="h-pane h-50 hide-on-landscape">
                    <br/>
                    <br/>
                    <br/>
                    <div className='pane row'>
                        <ReactiveLogo glb='logo-2.glb' visible={true} cameraR={{position:[0,0,250], fov: 1}}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Title;