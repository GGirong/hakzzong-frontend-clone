export const getGetters = state => ({
    getErrors: listener =>
        state.errors.filter(error => error.targetListener === listener),
});
