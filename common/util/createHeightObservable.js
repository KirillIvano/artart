import {getArticleHeight} from './../util/getArticleHeight';


export const createHeightObservable = (tickInterval=200) => {
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
