const CHANGE = 'change/CHANGE'

export const changeText = text => ({
    type: CHANGE,
    text
})

const initialState = {
    text: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}