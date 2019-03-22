import { combineReducers } from "redux";

import home from "./home";
import globalState from "./home";
let rootReducer = combineReducers({
  home,
  globalState
});

export { rootReducer };
