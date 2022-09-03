const initialState = {
    isLightOn: false
}

const lightStatusReducer = (state = initialState, action) => {

    const {type} = action;

    switch(type) {
        case "SWITCH": {
            const prevValue = state.isLightOn;
            return {
                ...state, 
                isLightOn: !prevValue
            }
        }

        default: return state;
    }
}

export default lightStatusReducer;