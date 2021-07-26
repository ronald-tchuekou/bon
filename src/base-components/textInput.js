import React, { useEffect, useRef } from 'react'
import { FloatMenu } from "mirajs/dist/js"
import PropTypes from 'prop-types'

/**
 * Text input form
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const TextInput = props => {
    const {label, isSelect, type, value, error, helperText, onValueChange, handleInputClick} = props
    return (
        <div className={`text_input__wrapper ${error ? 'error' : ''}`}>
            <label htmlFor={label}>{label}</label>
            <div className={`input__wrapper ${isSelect ? 'select__input' : ''}`}>
                <input
                    onClick={(e) => handleInputClick(e.target)}
                    type={type}
                    id={label}
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}/>
                <div className='indicate'>
                    <i className={"DGfi-arrow_drop_down"}></i>
                </div>
            </div>
            {error ? <small>{helperText}</small> : <></>}
        </div>
    )
}
TextInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.bool,
    isSelect: PropTypes.bool,
    helperText: PropTypes.string,
    onValueChange: PropTypes.func,
    handleInputClick: PropTypes.func
}
TextInput.defaultProps = {
    label: "",
    value: "",
    isSelect: false,
    type: 'text',
    error: false,
    helperText: "",
    handleInputClick: () => {},
    onValueChange: () => {}
}

/**
 * Select input form
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Select = props => {
    const {label, value, error, contents, helperText, onValueChange} = props
    function showMenu(elt){
        new FloatMenu(elt, contents.map(item => ({
            title: item.label,
            onClick: () => onValueChange(item.value),
            icon: ""
        })), true)
    }
    let v = contents.find(item => item.value === value)
    let v_label = v === undefined ? "" : v.label
    return (
        <TextInput
            isSelect
            handleInputClick={(elt) => showMenu(elt)}
            label={label}
            value={v_label}
            error={error}
            helperText={helperText}
        />
    )
}
Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.bool,
    contents: PropTypes.array,
    helperText: PropTypes.string,
    onValueChange: PropTypes.func
}
Select.defaultProps = {
    label: "",
    value: "",
    contents: [],
    error: false,
    helperText: "",
    onValueChange: () => {}
}

/**
 * Textarea input form
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Textarea = props => {
    const textarea_ref = useRef(HTMLTextAreaElement)
    const {autoGrow, label, value, error, rows, helperText, onValueChange, handleInputClick} = props
    useEffect(() => {
        if(autoGrow){
            let textarea = textarea_ref.current
            textarea.style.resize = 'none'
        }
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [autoGrow])
    function onResize(){
        setTimeout(autogrow, 300)
    }
    function onFocus(){
        autogrow()
        let textarea = textarea_ref.current
        window.addEventListener('resize', onResize)
        textarea.addEventListener('input', onInput)
        textarea.addEventListener('focus', onFocus)
    }
    function onInput(){
        autogrow()
    }
    function autogrow(){
        let textarea = textarea_ref.current
        textarea.style.height = 'auto'
        textarea.style.overflow = 'hidden'
        textarea.style.boxSizing = 'border-box'
        textarea.style.height = textarea.scrollHeight + 'px'
    }
    return (
        <div className={`text_input__wrapper ${error ? 'error' : ''}`}>
            <label htmlFor={label}>{label}</label>
            <textarea
                rows={autoGrow ? 2 : rows}
                ref={textarea_ref}
                onClick={handleInputClick}
                onFocus={autoGrow ? onFocus : () => {}}
                name={label}
                id={label}
                value={value}
                onChange={e => onValueChange(e.target.value)}>
            </textarea>
            {error ? <small>{helperText}</small> : <></>}
        </div>
    )
}
Textarea.propTypes = {
    rows: PropTypes.number,
    autoGrow: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.bool,
    isSelect: PropTypes.bool,
    helperText: PropTypes.string,
    handleInputClick: PropTypes.func
}
Textarea.defaultProps = {
    rows: 3,
    autoGrow: false,
    label: "",
    value: "",
    isSelect: false,
    error: false,
    helperText: "",
    handleInputClick: undefined,
}
