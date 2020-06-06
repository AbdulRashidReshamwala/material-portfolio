import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { withRouter } from "react-router-dom";

function BottomNavBar({ history }) {
  const [navIndex, setNavIndex] = useState(0);
  const pages = ["", "project", "todo"];
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
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </>
  );
}

export default withRouter(BottomNavBar);
