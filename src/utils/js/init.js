/*
 * Copyright (c) 25/07/2021 14:18
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

export function InitRipple () {
    const rippleElements = document.querySelectorAll('.ripple');
    rippleElements.forEach(element => setRipple(element));
}

/**
 * Set ripple function
 * @param {HTMLElement} element
 */
export const setRipple = element => {
    element.addEventListener('click', function(e) {
        let x = e.clientX - element.offsetLeft;
        let y = e.clientY - element.offsetTop;
        let ripple_color = element.dataset.ripplecolor;
        let ripples = document.createElement('span');
        ripples.className = "ripple__wrapper ripple-" + ripple_color;
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        element.appendChild(ripples);
        setTimeout(() => {
            ripples.remove();
        }, 1010);
    });
}

export class InjectLoader {

    /**
     * Loader injection.
     * @param {HTMLElement} element Element that loader would be injected.
     */
    constructor(element) {

        this.element = element;

        this.root = this.createDivWithClass('loader_injection__root text-primary');

        // Injections.
        this.injectCircularLoaderIndeterminate();

        // Style
        this.setRootStyle();

        this.element.style.position = 'relative';

        this.element.appendChild(this.root);
    }

    /**
     * dismissing loader method.
     */
    dismiss () {
        this.root.remove();
    }

    /**
     * @param {String} className
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }

    /**
     * Inject circular indeterminate loader method.
     */
    injectCircularLoaderIndeterminate() {
        this.root.innerHTML = `<svg 
            version="1.2" 
            id="L6" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px" viewBox="0 0 100 100" 
            enable-background="new 0 0 100 100" 
            xml:space="preserve">
            <rect fill="none" stroke="currentColor" stroke-width="4" x="25" y="25" width="50" height="50">
                <animateTransform
                 attributeName="transform"
                 dur="0.5s"
                 from="0 50 50"
                 to="180 50 50"
                 type="rotate"
                 id="strokeBox"
                 attributeType="XML"
                 begin="rectBox.end"/>
            </rect>
            <rect x="27" y="27" fill="currentColor" width="46" height="50">
                <animate
                 attributeName="height"
                 dur="1s"
                 attributeType="XML"
                 from="50" 
                 to="0"
                 id="rectBox" 
                 fill="freeze"
                 begin="0s;strokeBox.end"/>
            </rect>
        </svg>`;
    }

    /**
     * Root style method.
     */
    setRootStyle() {
        this.root.style.position = 'absolute';
        this.root.style.background = 'rgba(255,255,255,0.53)';
        this.root.style.top = '0';
        this.root.style.left = '0';
        this.root.style.height = '100%';
        this.root.style.width = '100%';
        this.root.style.display = 'flex';
        this.root.style.justifyContent = 'center';
        this.root.style.alignItems = 'center';
        this.root.style.cursor = 'wait';
    }
}
