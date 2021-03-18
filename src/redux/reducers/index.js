import { combineReducers } from "redux";
import iconReducer from "./iconsReducer";

const rootReducer = combineReducers({
  iconReducer,
});

export default rootReducer;
