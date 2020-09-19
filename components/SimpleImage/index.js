import './styles.scss';

const TOOLTIP_PROPS = ['sizing', 'src', 'alt'];

const getSizingDimensions = sizing =>
    sizing.split('x').map(Number);

const getTooltipReservedPadding = sizing => {
    const [x, y] = getSizingDimensions(sizing);

    return `${y/x * 100}%`;
};


class Tooltip extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    static get observedAttributes() {
        return TOOLTIP_PROPS;
    }
    attributeChangedCallback() {
        this.render();
    }

    render() {
        const sizing = this.getAttribute('sizing');
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt');

        this.innerHTML = `
            <div
                class="tooltip"
                style="padding-bottom: ${getTooltipReservedPadding(sizing)}"
            >
                <img
                    class="tooltip__image"
                    src=${src}
                    alt=${alt}
                />
            </div>
        `;
    }
}

customElements.define('simple-img', Tooltip);
