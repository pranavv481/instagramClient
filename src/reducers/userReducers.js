export const initialState = null

export const reducer = (action, state) => {
    if (action.type == "USER") {
        return action.payload
    }
    return state
}