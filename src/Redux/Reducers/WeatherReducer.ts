import { weatherdata, weatherData } from "../actionType";

type stateType = {
  isTokyo?: weatherdata | undefined;
  isOttawa?: weatherdata | undefined;
  isMoscow?: weatherdata | undefined;
};

const defaultState: stateType = {
  isTokyo: undefined,
  isOttawa: undefined,
  isMoscow: undefined,
};

export const weatherDataReducer = (
  state = defaultState,
  action: weatherData
): stateType => {
  switch (action.type) {
    case "ISTOKYO":
      const { isTokyo } = action?.payload;
      return {
        ...state,
        isTokyo,
      };
    case "ISOTTAWA":
      const { isOttawa } = action?.payload;
      return {
        ...state,
        isOttawa,
      };
    case "ISMOSCOW":
      const { isMoscow } = action?.payload;
      return {
        ...state,
        isMoscow,
      };
    default:
      return state;
  }
};
