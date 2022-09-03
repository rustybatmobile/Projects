const initialState = {
    count: 0
}

export const countReducer = (state = initialState, {type}) => {
    switch(type) {
        case "INCREMENT": {
            return {
                ...state, 
                count: state.count + 1
            }
        }

        case "RESET": {
            return {
                ...state, 
                count: 0
            }
        }

        default: return state;
    }
}