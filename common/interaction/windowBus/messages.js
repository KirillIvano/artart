import {ARTICLE_LOADED_EVENT, ARTICLE_HEIGHT_MESSAGE} from './eventTypes';
import {createMessage} from './util/createMessage';


export const createHeightMessage = height => createMessage(ARTICLE_HEIGHT_MESSAGE, {height});
export const createArticleLoadMessage = () => createMessage(ARTICLE_LOADED_EVENT);
