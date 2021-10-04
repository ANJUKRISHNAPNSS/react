import { SET_SITE_DATA } from "../action/siteaction"
import { SET_CITY_DATA } from "../action/siteaction"
export const siteReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_SITE_DATA:
            return payload
            default:
                return state
    }
}

export const projectcityReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_CITY_DATA:
            return payload
            default:
                return state
    }
}
