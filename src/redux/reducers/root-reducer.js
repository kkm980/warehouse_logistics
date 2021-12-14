import { combineReducers } from "redux";
import arrReducers from "./reducer";

const rootReducer = combineReducers({
    data:arrReducers
});
export default rootReducer;