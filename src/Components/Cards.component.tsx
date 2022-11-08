import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ServiceMain from "../serviceMain";
import { RootState } from "../Redux/Reducers";
import imgOfcloud from "../Assets/cloudy.png";
import { FetchIsTokyo } from "../Redux/Action/WeatherAction";
import { ISOTTAWA, weatherdata } from "../Redux/actionType";
import { Spinner } from "react-bootstrap";

export const CardsComponent: React.FC = () => {
  const Tokyodata = useSelector((state: RootState) => state.weatherDataReducer);
  let iconName: string | undefined;
  let weatherName: string | undefined;

  const { isTokyo, isOttawa, isMoscow } = Tokyodata;

  if (isTokyo) {
    isTokyo?.weather_icons?.map((e) => {
      iconName = e;
    });
    isTokyo?.weather_descriptions?.map((e) => {
      weatherName = e;
    });
  } else if (isOttawa) {
    isOttawa?.weather_icons?.map((e) => {
      iconName = e;
    });
    isOttawa?.weather_descriptions?.map((e) => {
      weatherName = e;
    });
  } else if (isMoscow) {
    isMoscow?.weather_icons?.map((e) => {
      iconName = e;
    });
    isMoscow?.weather_descriptions?.map((e) => {
      weatherName = e;
    });
  } else {
    iconName = undefined;
    weatherName = undefined;
  }

  return (
    <>
      <Card
        style={{
          width: "45rem",
          margin: "auto",
          boxShadow:
            "0 10px 16px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 10%)",
        }}>
        <Card.Body>
          <Card.Header style={{ fontSize: 40 }}>Today</Card.Header>
          <Card.Title
            style={{
              fontWeight: 600,
              display: "inline-flex",
              marginBottom: 100,
            }}>
            {weatherName ? (
              <Card.Img variant="top" src={iconName!} style={{ width: 110 }} />
            ) : null}
            <div>
              <div style={{ fontSize: 60 }}>
                {isTokyo
                  ? isTokyo?.temperature
                  : isMoscow
                  ? isMoscow?.temperature
                  : isOttawa
                  ? isOttawa?.temperature
                  : null}

                {weatherName ? `º` : null}
              </div>
              <div style={{ marginLeft: 20 }}>
                <h4> {weatherName} </h4>
              </div>
              {!weatherName ? (
                <div style={{ display: "inline-block" }}>
                  <Spinner animation="border" role="status"></Spinner>
                  <div style={{ fontSize: "unset" }}>
                    Please select the city for knowing the current weather.
                  </div>
                </div>
              ) : null}
            </div>{" "}
          </Card.Title>
        </Card.Body>
        <CardGroup>
          <Card className="card-day">
            <Card.Body>
              <Card.Title className="day-name">Wed</Card.Title>
              <Card.Img variant="top" src={iconName!} />
            </Card.Body>
            <Card.Footer
              style={{ backgroundColor: "transparent", border: "unset" }}>
              <span className="text-muted-day" style={{ color: "#000" }}>
                20&#xb0;
              </span>
            </Card.Footer>
          </Card>
          <Card className="card-day">
            <Card.Body>
              <Card.Title className="day-name">Thur</Card.Title>
              <Card.Img variant="top" src={iconName!} />
            </Card.Body>
            <Card.Footer
              style={{ backgroundColor: "transparent", border: "unset" }}>
              <span className="text-muted-day" style={{ color: "#000" }}>
                25&#xb0;
              </span>
            </Card.Footer>
          </Card>
          <Card className="card-day">
            <Card.Body>
              <Card.Title className="day-name">Fri</Card.Title>
              <Card.Img variant="top" src={iconName!} />
            </Card.Body>
            <Card.Footer
              style={{ backgroundColor: "transparent", border: "unset" }}>
              <span className="text-muted-day" style={{ color: "#000" }}>
                23&#xb0;
              </span>
            </Card.Footer>
          </Card>
          <Card className="card-day">
            <Card.Body>
              <Card.Title className="day-name">Sat</Card.Title>
              <Card.Img variant="top" src={iconName!} />
            </Card.Body>
            <Card.Footer
              style={{ backgroundColor: "transparent", border: "unset" }}>
              <span className="text-muted-day" style={{ color: "#000" }}>
                22&#xb0;
              </span>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Card>
    </>
  );
};
