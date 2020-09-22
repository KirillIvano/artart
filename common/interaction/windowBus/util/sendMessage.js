export const sendMessage = message =>
    window.parent.postMessage(message, '*');
