import ServiceMain from "../../serviceMain";
import { ISMOSCOW, ISOTTAWA, ISTOKYO, weatherdata } from "../actionType";
import { useDispatch } from "react-redux";

export const FetchIsTokyo = async (dispatch: any, cityname: string) => {
  const res = await ServiceMain.get(
    `/current?access_key=de87b9230cc3c49b116e18c52db8176d&query=${cityname}`
  );
  switch (cityname) {
    case "tokyo":
      dispatch({
        type: ISTOKYO,
        payload: {
          isTokyo: res?.data?.current,
        },
      });
      break;
    case "moscow":
      dispatch({
        type: ISMOSCOW,
        payload: {
          isMoscow: res?.data?.current,
        },
      });
      break;
    case "ottawa":
      dispatch({
        type: ISOTTAWA,
        payload: {
          isOttawa: res?.data?.current,
        },
      });
      break;
    default:
      return;
  }
};
