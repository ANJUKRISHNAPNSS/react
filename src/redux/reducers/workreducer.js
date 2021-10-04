import { SET_WORK_DATA } from "../action/workaction"
import { EDIT_WORK_DETAILS } from "../action/workaction"

export const workReducer = (state = {work:[],editData:{}}, action) => {
    let { type, payload } = action
    switch (type) {
        case SET_WORK_DATA:
            return {...state,work:payload};
            case EDIT_WORK_DETAILS:

           console.log(state.editData)

            return{...state,editData:payload}
            default:
                return state
    }
}