import { SET_PROJECT_DATA } from "../action/project.action"
// import { SET_WORK_DATA } from "../action/project.action"
// import { SET_HISTORY_DATA } from "../action/project.action"
import { EDIT_EMP_DETAILS } from "../action/project.action"
// import { EDIT_WORK_DETAILS } from "../action/project.action"
import { SET_GETDETAILSDATA_DATA } from "../action/project.action"
import { SET_EMPBYID_DATA } from "../action/project.action"
export const projectReducer = (state = { project: [], editData: {} }, action) => {
    let { type, payload } = action
    switch (type) {
        case SET_PROJECT_DATA:
            return { ...state, project: payload }
        case EDIT_EMP_DETAILS:

            console.log(state.editData)

            return { ...state, editData: payload }


        default:
            return state
    }
}

export const empfromtoReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_GETDETAILSDATA_DATA:
            return payload
        default:
            return state
    }
}
export const empbyidReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_EMPBYID_DATA:
            return payload
        default:
            return state
    }
}





