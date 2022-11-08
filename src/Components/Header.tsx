import Nav from "react-bootstrap/Nav";
import { FetchIsTokyo } from "../Redux/Action/WeatherAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Header.css";

export const Header: React.FC = () => {
  const [cityname, setCityname] = useState<string | undefined>(undefined);
  const dispatch = useDispatch();

  const onHandleCity = (cityname: string) => {
    FetchIsTokyo(dispatch, cityname);
  };

  return (
    <Nav
      className="justify-content-center"
      activeKey="/home"
      style={{ height: 80, paddingTop: 40, marginBottom: 30 }}>
      <Nav.Item className="menu-item-header">
        <Nav.Link
          style={{ color: "#000" }}
          onClick={() => {
            onHandleCity("ottawa");
          }}>
          OTTAWA
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="menu-item-header">
        <Nav.Link
          style={{ color: "#000" }}
          onClick={() => {
            setCityname("moscow");
            onHandleCity(cityname!);
          }}>
          MOSCOW
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="menu-item-header">
        <Nav.Link
          style={{ color: "#000" }}
          onClick={() => {
            setCityname("tokyo");
            onHandleCity(cityname!);
          }}>
          TOKYO
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
