import './styles.scss';

const YOUTUBE_PROPS = ['src', 'preview-src'];


const getFrameTemplate = src => `
    <iframe
        class="video"
        src=${src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    ></iframe>
`;



const getVideoId = videoSrc => {
    const matchRes = videoSrc.match(/\/embed\/(\w+)/);

    if (!matchRes) throw new Error('Неправильная ссылка на видео');

    const [, videoId] = matchRes;

    return videoId;
};

const getPreviewSrc = videoSrc => {
    const videoId = getVideoId(videoSrc);

    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
};

const getImageTemplate = src => `
    <img
        src="${src}"
        class="videoImage"
    >
`;


class YoutubeVideo extends HTMLElement {
    constructor() {
        super();
        this.isPlayed = false;

        this.render();

        const handlePreviewClick = () => {
            this.isPlayed = true;
            this.render();

            this.removeEventListener('click', handlePreviewClick);
        };


        this.addEventListener('click', handlePreviewClick);
    }

    static get observedAttributes() {
        return YOUTUBE_PROPS;
    }
    attributeChangedCallback() {
        this.render();
    }

    render() {
        const src = this.getAttribute('src');
        const previewSrc = this.getAttribute('preview-src') || getPreviewSrc(src);
        const {isPlayed} = this;

        this.innerHTML = `
            <div class="videoPreview ${isPlayed ? 'played' : ''}">
                ${isPlayed ? getFrameTemplate(src) : getImageTemplate(previewSrc)}
            </div>
        `;
    }
}

customElements.define('youtube-video', YoutubeVideo);
