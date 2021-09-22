const initialState = {
    menu: []
}

const reduser = (state=initialState, actions) => {
    switch (actions.type) {
        case 'MENU_LOADED':
            return {
                menu: actions.payload
            };

        default: return state;
    }
};

export default reduser;