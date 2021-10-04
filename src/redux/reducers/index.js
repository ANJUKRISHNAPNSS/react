import { combineReducers } from "redux";
import { siteReducer } from "./sitereducer";
import { projectReducer } from "./project.reducer";
import { workReducer } from "./workreducer";
import { historyReducer } from "./historyreducer";
import {projectcityReducer} from "./sitereducer"
import {empfromtoReducer} from "./project.reducer"
import {empbyidReducer} from "./project.reducer"
export const rootReducer=combineReducers ({
    
    project:projectReducer,
    work:workReducer,
    history:historyReducer,
    site:siteReducer,
    city:projectcityReducer,
    fromto:empfromtoReducer,
    empid:empbyidReducer
    // empid:empidReducer
    
})