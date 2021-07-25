import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { IconButton } from './buttons'
import { InjectLoader } from '../utils/js/init'

let Modal = (props, ref) => {

    const loader_ref  = useRef()

    const [loader, setLoader] = useState(undefined)
    const [show, setShow] = useState(false)

    useImperativeHandle(ref, () => ({
        showModal: () => setShow(true),
        showLoader: () => setLoader(new InjectLoader(loader_ref.current)),
        hideLoader: () => {
            if(loader !== undefined)
                loader.dismiss()
        }
    }))

    return (
        <div className={`app__modal ${show ? "show" : ""}`}>
            <div {...props} ref={loader_ref} className='app__card'>
                {props.children}
                <div className='modal__close-btn'>
                    <IconButton onClick={() => setShow(false)}>
                        <i className={"DGfi-clearclose"}></i>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
Modal = forwardRef(Modal)
export {Modal}

export const ModalHeader = props => {
    return (
        <div className='card__header'>
            <div className='d-flex justify-content-between align-items-start'>
                {props.children}
            </div>
        </div>
    )
}

export const ModalContent= props => {

    return (
        <div className="card__body">
            {props.children}
        </div>
    )
}

export const ModalFooter = props => {

    return(
        <div className='card__footer'>
            {props.children}
        </div>
    );
}
