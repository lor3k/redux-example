const CHANGE = 'change/CHANGE'

export const changeText = () => ({
    type: CHANGE
})

const initialState = {
    text: 'b'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                text: 'a'
            }
        default:
            return state
    }
}