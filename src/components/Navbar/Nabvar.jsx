import { Navbar, Text } from "./styled";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHouseMedical,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const NavbarV = ({ handleSubmit, handleInputs }) => {
  return (
    <Navbar style={{ display: " flex", flexDirection: "column" }}>
      <div style={{ height: "35%", width: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "40%",
            display: " flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div
          style={{
            width: "100%",
            height: "30%",
            display: " flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/dashboard"
            width="100%"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <div>
              <FontAwesomeIcon icon={faGear} size="2x" color="#ffff" />
            </div>
            <Text>Dashboard</Text>
          </Link>
        </div>
        <div
          style={{
            width: "100%",
            height: "30%",
            display: " flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Link
            to="/incidents"
            width="100%"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <div>
              <FontAwesomeIcon icon={faHouseMedical} size="2x" color="#ffff" />
            </div>
            <Text>Incidents</Text>
          </Link>
        </div>
      </div>
      <div
        style={{
          height: "65%",
          width: "100%",
          display: " flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          marginBottom: "30%",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          size="2x"
          color="#ffff"
        />
      </div>
    </Navbar>
  );
};
