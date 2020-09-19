import './styles.scss';
import './vars.scss';


const HEIGHT_CHANGE_EVENT = 'iframe_height';


const getArticleHeight = () => document.body.scrollHeight;

const createHeightMessage = height => ({
    __app__: true,
    payload: {
        type: HEIGHT_CHANGE_EVENT,
        data: {
            height,
        },
    },
});

const sendHeightMessage = height => window.parent
    .postMessage(createHeightMessage(height), '*');


const createHeightObservable = (tickInterval=200) => {
    const handlers = [];
    let prevHeight = getArticleHeight();

    const handleTick = () => {
        const currentHeight = getArticleHeight();

        if (currentHeight !== prevHeight) {
            prevHeight = currentHeight;
            handlers.forEach(f => f(currentHeight));
        }
    };

    const tickerId = setInterval(handleTick, tickInterval);

    return ({
        observe: f => handlers.push(f),
        unobserve: f => {
            const handlerInd = handlers.indexOf(f);
            handlerInd !== -1 && handlers.splice(handlerInd, 1);
        },
        destroy: () => clearInterval(tickerId),
    });
};


const init = () => {
    const currentHeight = getArticleHeight();
    sendHeightMessage(currentHeight);

    createHeightObservable().observe(sendHeightMessage);
};

init();
