import { combineReducers } from "redux";
import { weatherDataReducer } from "./WeatherReducer";

const rootReducer = combineReducers({
  weatherDataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
