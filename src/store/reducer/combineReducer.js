import { combineReducers } from "redux";
import { counterReducer, minuscounterReucer, pluscounterReducer} from "./counterReducer";

const combineReducer = combineReducers({
    counterReducer : counterReducer,
    // pluscounterReducer : pluscounterReducer,
    // minuscounterReucer : minuscounterReucer,
   
})
export default combineReducer
