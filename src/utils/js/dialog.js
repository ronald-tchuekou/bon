/*
 * Copyright (c) 25/07/2021 18:56
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

import { setRipple } from './init'

/**
 * @callback onActionClick
 * @param {HTMLElement} root
 */

/**
 * Dialog function.
 * @param {string} title
 * @param {string} text
 * @param {array<{title: string, action: onActionClick, color: string}>} actions
 * @constructor
 */
const Dialog = ({title, text, actions}) => {

    // Dialog Title
    let titleElt = CreateElementWithClass('div', 'card__header p-15'),
        h4 = CreateElementWithClass('h4','text-primary')
    h4.innerText = title
    titleElt.appendChild(h4)

    // Dialog Content
    let contentElt = CreateElementWithClass('div', 'card__body px-15 pb-15'),
        p = CreateElementWithClass('p', 'text-gray')
    p.innerText = text
    contentElt.appendChild(p)

    // Dialog Actions.
    let actionsElt = CreateElementWithClass('div', 'card__footer')

    // Dialog root.
    let root = CreateElementWithClass('div', 'app_dialog'),
        card = CreateElementWithClass('div', 'app__card')
    card.style.maxWidth = '400px'
    card.appendChild(titleElt)
    card.appendChild(contentElt)
    card.appendChild(actionsElt)
    root.appendChild(card)

    actions.forEach(item => {
        let color = item.color ?? "primary"
        let btn = CreateElementWithClass('button', `btn text-${color} shadow ripple`)
        btn.innerText = item.title
        setRipple(btn)
        btn.addEventListener('click', () => item.action(root))
        actionsElt.appendChild(btn)
    })

    // Show Content
    document.querySelector('body').appendChild(root);

}

/**
 * Function to create div element.
 * @param {string} elt
 * @param {string} classe
 * @returns {HTMLElement}
 * @constructor
 */
export const CreateElementWithClass = (elt, classe) => {
    let div = document.createElement(elt)
    div.className = classe
    return div
}

export default Dialog;
