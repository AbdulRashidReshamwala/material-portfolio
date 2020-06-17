import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  Code,
  ImportantDevices,
  AlternateEmail,
  EmojiPeople,
} from "@material-ui/icons";
import { withRouter } from "react-router-dom";

function BottomNavBar({ history }) {
  const pages = ["", "project", "experience", "contact"];
  const [navIndex, setNavIndex] = useState(
    pages.indexOf(history.location.pathname.substring(1)) === -1
      ? 0
      : pages.indexOf(history.location.pathname.substring(1))
  );
  return (
    <>
      <BottomNavigation
        value={navIndex}
        onChange={(e, newValue) => {
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
        <BottomNavigationAction
          label="Experience"
          icon={<ImportantDevices />}
        />
        <BottomNavigationAction label="Contact" icon={<AlternateEmail />} />
      </BottomNavigation>
    </>
  );
}

export default withRouter(BottomNavBar);
