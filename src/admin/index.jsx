import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { Button, Modal, ModalContent, ModalFooter, ModalHeader } from '../base-components'
import Dialog from '../utils/js/dialog'

export default function Admin () {

    const user_ref = useRef(null)

    useEffect(() => {
    }, [])

    const content = {
        margin: '30px'
    }

    return (
        <div style={content}>



            <Button
                variante={"contained"}
                color={"red"}
                onClick={() => user_ref.current.show()}>Show Modal</Button>
            <Button onClick={() => Dialog({
                title: "Boite de dialogue",
                text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias aliquid, assumenda",
                actions: [
                    {title: 'Annuler', action: (root) => {root.remove()}, color: "red"},
                    {title: 'OK', action: () => {}}
                ]
            })} color={"primary"}>Show dialog</Button>
            <UserModal ref={user_ref}/>
        </div>
    );

}

const UserModal = forwardRef((props, ref) => {

    const modal_ref = useRef()

    useImperativeHandle(ref, () => ({
        show: () => modal_ref.current.showModal()
    }))

    const modalStyle = {
        maxWidth: "500px"
    }

    return (
        <Modal style={modalStyle} ref={modal_ref}>
            <ModalHeader>
                <h4>Modal header</h4>
            </ModalHeader>
            <ModalContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias aliquid, assumenda
                    atque delectus ducimus ea eius eveniet ex explicabo incidunt laudantium nemo nulla quaerat saepe sed
                    tempora ut?
                </p>
            </ModalContent>
            <ModalFooter>
                <Button onClick={() => {
                    modal_ref.current.showLoader()
                    setTimeout(() => {
                        modal_ref.current.hideLoader()
                    }, 7000)
                }} color={'red'}>Submit</Button>
            </ModalFooter>
        </Modal>
    )
})
