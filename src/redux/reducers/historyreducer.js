import { SET_HISTORY_DATA } from "../action/historyaction"
export const historyReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_HISTORY_DATA:
            return payload
            default:
                return state
    }
}
