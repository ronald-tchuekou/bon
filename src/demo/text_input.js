/*
 * Copyright (c) 26/07/2021 09:05
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Button, Modal, ModalContent, ModalFooter, ModalHeader, Select, TextInput, Textarea } from '../base-components'
import Dialog from '../utils/js/dialog'
import { InitRipple } from '../utils/js/init'

export const TextInputDemo = () => {

    const [name, setName] = useState({value: '', error: false, helperText: ''})
    const [number, setNumber] = useState({value: '', error: false, helperText: ''})
    const [date, setDate] = useState({value: '', error: false, helperText: ''})
    const [time, setTime] = useState({value: '', error: false, helperText: ''})
    const [select, setSelect] = useState({value: '', error: false, helperText: ''})
    const [message, setMessage] = useState({value: '', error: false, helperText: ''})
    const user_ref = useRef(null)

    useEffect(() => {
        InitRipple();
    }, [])

    const content = {
        padding: '30px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '100vh',
    },
        content1 = {
            width: '600px',
        }

    return (
        <div style={content} className={"d-flex justify-content-center align-items-center"}>

            <div style={content1}>

                <TextInput
                    label={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias aliquid, assumenda"}
                    value={name.value}
                    error={name.error}
                    helperText={name.helperText}
                    onValueChange={_val => setName({value: _val, error: false, helperText: ''})}
                    type={"text"}
                />
                <TextInput
                    label={"Number"}
                    value={number.value}
                    error={number.error}
                    helperText={number.helperText}
                    onValueChange={_val => setNumber({value: _val, error: false, helperText: ''})}
                    type={"number"}
                />
                <TextInput
                    label={"Date"}
                    value={date.value}
                    error={date.error}
                    helperText={date.helperText}
                    onValueChange={_val => setDate({value: _val, error: false, helperText: ''})}
                    type={"date"}
                />
                <TextInput
                    label={"Time"}
                    value={time.value}
                    error={time.error}
                    helperText={time.helperText}
                    onValueChange={_val => setTime({value: _val, error: false, helperText: ''})}
                    type={"time"}
                />
                <Select
                    label={"Values labels"}
                    value={select.value}
                    error={select.error}
                    helperText={select.helperText}
                    onValueChange={_val => setSelect({value: _val, error: false, helperText: ''})}
                    contents={[
                        {label: 'Label1', value: 'Value1'},
                        {label: 'Label2', value: 'Value2'},
                        {label: 'Label3', value: 'Value3'},
                        {label: 'Label4', value: 'Value4'},
                    ]}
                />

                <Textarea
                    label={"Message de suggestion (default)"}
                    value={message.value}
                    error={message.error}
                    rows={3}
                    helperText={message.helperText}
                    onValueChange={(_val) => setMessage({value: _val, error: false, helperText: ''})}/>

                <Textarea
                    autoGrow
                    label={"Message de suggestion (auto grow)"}
                    value={message.value}
                    error={message.error}
                    helperText={message.helperText}
                    onValueChange={(_val) => setMessage({value: _val, error: false, helperText: ''})}/>

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
            </div>
            <UserModal ref={user_ref}/>
        </div>
    );
}

export const UserModal = forwardRef((props, ref) => {

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
