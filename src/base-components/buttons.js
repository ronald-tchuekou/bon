/*
 * Copyright (c) 25/07/2021 09:41
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

import PropTypes from 'prop-types'

/**
 * Button
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Button = props => {
    let {noshadow, onClick, color, variante, disabled, children, className} = props;
    let classe = `btn ripple ${!noshadow ? 'shadow' : ''}`;
    let ripple_color = "white"
    if(variante === undefined)
        classe += ` text-${color}`;
    else
        classe += ` ${variante} ${variante}-${color}`
    if(variante !== "contained")
        ripple_color = color;
    if(className !== undefined)
        classe += " " + className;
    return (
        <button
            data-rippleColor={ripple_color}
            {...props}
            className={classe}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )
}
Button.propTypes={
    color: PropTypes.oneOf(['dark', 'primary', 'accent', 'red', 'white']),
    variante: PropTypes.oneOf(['contained', 'outlined']),
    disabled: PropTypes.bool,
    noshadow: PropTypes.bool,
}
Button.defaultProps={
    color: "dark",
    variante: undefined,
    disabled: false,
    noshadow: false,
}

/**
 * Icon Button
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const IconButton = props => {
    let {onClick, color, variante, disabled, children, size, className} = props;
    const fontSize = size / 2;
    const classes = "icon-btn " + className;
    return (
        <Button
            noshadow
            style={{
                fontSize: `${fontSize}px`,
                width: `${size}px`,
                height: `${size}px`
            }}
            className={classes}
            color={color}
            variante={variante}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </Button>
    )
}
IconButton.propTypes = {
    color: PropTypes.oneOf(['dark', 'primary', 'accent', 'red', 'white']),
    variante: PropTypes.oneOf(['contained', 'outlined']),
    disabled: PropTypes.bool,
    size: PropTypes.number,
}
IconButton.defaultProps = {
    color: 'dark',
    variante: undefined,
    disabled: false,
    size: 35
}

/**
 * Floating action button
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Fab = props => {
    let {onClick, color, disabled, size, icon} = props;
    return (
        <IconButton
            size={size}
            className={"persist-shadow"}
            color={color}
            variante={"contained"}
            disabled={disabled}
            onClick={onClick}>
            <i className={icon}></i>
        </IconButton>
    )
}
Fab.propTypes = {
    color: PropTypes.oneOf(['dark', 'primary', 'accent', 'red', 'white']),
    disabled: PropTypes.bool,
    size: PropTypes.number,
    icon: PropTypes.string,
}
Fab.defaultProps = {
    color: 'dark',
    disabled: false,
    size: 35,
    icon: "DGfi-add",
}
