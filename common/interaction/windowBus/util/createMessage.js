export const createMessage = (type, data={}) => ({
    __app__: true,
    payload: {
        type,
        data,
    },
});
