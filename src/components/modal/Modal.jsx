import React from 'react'
import { Modal as BModal } from 'react-bootstrap';

import './style.scss'

function Modal({
    title,
    description,
    show:{show, setShow},
    className
}){
    const handleClose = () => setShow(false);

    return(
        <BModal className={"bg-transparent font-codesaver text-primary "+className} show={show} onHide={handleClose} centered>
            <div className='border border-primary'>
                <BModal.Header className="rounded-0">
                    {title}:
                </BModal.Header>
                <BModal.Body className="rounded-0">
                    {description}
                </BModal.Body>
            </div>
        </BModal>
    )
}

Modal.defaultProps = {
    className:'',
}

export default Modal;