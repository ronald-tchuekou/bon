import React from 'react'

export const Card = props => {
    return (
        <div className='app__card'>
            {props.children}
        </div>
    )
}

export const CardHeader = props => {
    return (
        <div className='card__header'>
            {props.children}
        </div>
    )
}

export const CardContent = props => {
    return (
        <div className='card__body'>
            {props.children}
        </div>
    )
}

export const CardFooter = props => {
    return (
        <div className='card__footer'>
            {props.children}
        </div>
    )
}
