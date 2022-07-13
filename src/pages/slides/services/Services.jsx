import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import Modal from '../../../components/modal/Modal';

import "./style.scss"

/**
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class Services
 * @extends {React.Component}
 */
function Services (){
    const { t } = useTranslation();

    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);
    const handleShow7 = () => setShow7(true);

    const [show8, setShow8] = useState(false);
    const handleShow8 = () => setShow8(true);

    const [show9, setShow9] = useState(false);
    const handleShow9 = () => setShow9(true);

    const [show10, setShow10] = useState(false);
    const handleShow10 = () => setShow10(true);

    const [show11, setShow11] = useState(false);
    const handleShow11 = () => setShow11(true);

    const [show12, setShow12] = useState(false);
    const handleShow12 = () => setShow12(true);

    return(
        <>
            <div className='font-codesaver services-text text-primary'>
                <div className='pane row hide-on-landscape row'>
                    <p className='col-1'></p>
                    <p className='col-5 text-center'>
                        <span className='services-link' onClick={handleShow1}>{t('services-1-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow2}>{t('services-2-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow3}>{t('services-3-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow4}>{t('services-4-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow5}>{t('services-5-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow6}>{t('services-6-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow7}>{t('services-7-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow8}>{t('services-8-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow9}>{t('services-9-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow10}>{t('services-10-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow11}>{t('services-11-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow12}>{t('services-12-title')}</span><br/>
                    </p>
                </div>
                <div className='pane row hide-on-portrait'>
                    <p className='col-2'></p>
                    <p className='col-10 text-center'>
                        <span className='services-link' onClick={handleShow1}>{t('services-1-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow2}>{t('services-2-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow3}>{t('services-3-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow4}>{t('services-4-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow5}>{t('services-5-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow6}>{t('services-6-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow7}>{t('services-7-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow8}>{t('services-8-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow9}>{t('services-9-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow10}>{t('services-10-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow11}>{t('services-11-title')}</span><br/>
                        |<br/>
                        |<br/>
                        <span className='services-link' onClick={handleShow12}>{t('services-12-title')}</span><br/>
                    </p>
                </div>
            </div>

            <Modal className="services-text" title={t('services-1-title')} description={t('services-1-description')} show={{show:show1, setShow:setShow1}}/>
            <Modal className="services-text" title={t('services-2-title')} description={t('services-2-description')} show={{show:show2, setShow:setShow2}}/>
            <Modal className="services-text" title={t('services-3-title')} description={t('services-3-description')} show={{show:show3, setShow:setShow3}}/>
            <Modal className="services-text" title={t('services-4-title')} description={t('services-4-description')} show={{show:show4, setShow:setShow4}}/>
            <Modal className="services-text" title={t('services-5-title')} description={t('services-5-description')} show={{show:show5, setShow:setShow5}}/>
            <Modal className="services-text" title={t('services-6-title')} description={t('services-6-description')} show={{show:show6, setShow:setShow6}}/>
            <Modal className="services-text" title={t('services-7-title')} description={t('services-7-description')} show={{show:show7, setShow:setShow7}}/>
            <Modal className="services-text" title={t('services-8-title')} description={t('services-8-description')} show={{show:show8, setShow:setShow8}}/>
            <Modal className="services-text" title={t('services-9-title')} description={t('services-9-description')} show={{show:show9, setShow:setShow9}}/>
            <Modal className="services-text" title={t('services-10-title')} description={t('services-10-description')} show={{show:show10, setShow:setShow10}}/>
            <Modal className="services-text" title={t('services-11-title')} description={t('services-11-description')} show={{show:show11, setShow:setShow11}}/>
            <Modal className="services-text" title={t('services-12-title')} description={t('services-12-description')} show={{show:show12, setShow:setShow12}}/>
        </>
        
    );
}

export default Services;