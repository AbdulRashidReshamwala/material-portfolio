import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  Code,
  ImportantDevices,
  AlternateEmail,
  EmojiPeople,
} from "@material-ui/icons";
import { withRouter } from "react-router-dom";

function BottomNavBar({ history }) {
  const [navIndex, setNavIndex] = useState(0);
  const pages = ["", "project", "experience", "contact"];
  return (
    <>
      <BottomNavigation
        value={navIndex}
        onChange={(event, newValue) => {
          setNavIndex(newValue);
          history.push(pages[newValue]);
        }}
        style={{
          width: "96%",
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom: "12px",
          position: "fixed",
          bottom: 0,
        }}
        showLabels
      >
        <BottomNavigationAction label="About" icon={<EmojiPeople />} />
        <BottomNavigationAction label="Projects" icon={<Code />} />
        <BottomNavigationAction label="Experince" icon={<ImportantDevices />} />
        <BottomNavigationAction label="Contact" icon={<AlternateEmail />} />
      </BottomNavigation>
    </>
  );
}

export default withRouter(BottomNavBar);
