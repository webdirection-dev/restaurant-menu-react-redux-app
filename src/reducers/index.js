const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
}

const reducer = (state=initialState, actions) => {
    switch (actions.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: actions.payload,
                loading: false,
                error: false
            };

        case 'MENU_REQUESTED':
            return {
                ...state,
                // menu: state.menu,
                loading: true,
                error: false
            };

        case 'MENU_ERROR':
            return {
                ...state,
                // menu: state.menu,
                // loading: state.loading,
                error: true
            };

        case 'ITEM_ADD_TO_CARD':
            const addId = actions.payload,
                addItem = state.menu[addId -1];
                // item = state.menu.find(item => item.id === thisId);

            const newItem = {
                title: addItem.title,
                price: addItem.price,
                url: addItem.url,
                category: addItem.category,
                id: addItem.id
            }

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };

        case 'ITEM_REMOVE_FROM _CARD':
            const arrWithout = [],
                removeId = actions.payload;

            state.items.forEach(item => {
                if (item.id !== removeId) arrWithout.push(item)
            })

            return {
                ...state,
                items: arrWithout
            };

        default: return state;
    }
};

export default reducer;