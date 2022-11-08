import { RootState } from "./Reducers";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export const ISTOKYO = "ISTOKYO";
export const ISMOSCOW = "ISMOSCOW";
export const ISOTTAWA = "ISOTTAWA";

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type weatherdata = {
  temperature: number;
  weather_icons: [];
  weather_descriptions: [];
};

export type weatherData = {
  type: typeof ISTOKYO | typeof ISOTTAWA | typeof ISMOSCOW;
  payload: {
    isTokyo?: weatherdata;
    isOttawa?: weatherdata;
    isMoscow?: weatherdata;
  };
};
