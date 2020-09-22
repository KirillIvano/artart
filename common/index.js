import {sendArticleHeightMessage, sendArticleLoadMessage} from './interaction/windowBus';
import {getArticleHeight} from './util/getArticleHeight';
import {createHeightObservable} from './util/createHeightObservable';

import './styles.scss';
import './vars.scss';


const sendHeight = () => sendArticleHeightMessage(getArticleHeight());

const init = () => {
    sendArticleLoadMessage();
    sendHeight();

    const heightObservable = createHeightObservable();
    heightObservable.observe(sendHeight);
};

init();
