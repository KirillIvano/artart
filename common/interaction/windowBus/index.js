import {createArticleLoadMessage, createHeightMessage} from './messages';
import {sendMessage} from './util/sendMessage';


export const sendArticleHeightMessage = height =>
    sendMessage(createHeightMessage(height));

export const sendArticleLoadMessage = () =>
    sendMessage(createArticleLoadMessage());
