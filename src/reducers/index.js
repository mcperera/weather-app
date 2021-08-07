import { combineReducers } from "redux";
import weatherReducer from "./data_fetch";

const rootReducer = combineReducers({ weatherReducer });

export default rootReducer;
