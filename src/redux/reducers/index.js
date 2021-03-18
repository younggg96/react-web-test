import { combineReducers } from "redux";
import iconReducer from "./iconsReducer";
import optionReducer from './optionsReducer';

const rootReducer = combineReducers({
  iconReducer,
  optionReducer
});

export default rootReducer;
