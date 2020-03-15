export const languages = (state = 'en', action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return action.language;
        default:
            return state;
    }
};
