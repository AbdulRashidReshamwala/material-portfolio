import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar/Navbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import {
  Container,
  Box,
  CssBaseline,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function App() {
  const [darkState, setDarkState] = useState(true);

  const palletType = darkState ? "dark" : "light";

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar handleThemeChange={handleThemeChange} darkState={darkState} />
        <Container>
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            congue volutpat facilisis. Sed scelerisque venenatis mi at eleifend.
            Curabitur condimentum, lectus ac posuere cursus, risus tortor
            aliquet orci, vitae consequat libero lectus id lectus. Vestibulum
            vel bibendum sem. Etiam mollis nibh convallis sollicitudin faucibus.
            Pellentesque eu imperdiet nibh, quis volutpat sapien. Proin maximus
            neque vitae lectus gravida, sed elementum eros sollicitudin.
            Phasellus vulputate nunc a velit consequat fermentum. Nam tempor a
            felis sit amet aliquam. In ut posuere metus, in consectetur metus.
            Praesent dictum lorem mauris, non ultrices justo luctus ac. Quisque
            fringilla tempus aliquam. In hac habitasse platea dictumst. Integer
            placerat libero non libero condimentum commodo. Morbi in ipsum non
            ante viverra molestie. In hac habitasse platea dictumst. Sed id est
            faucibus, ullamcorper ante sed, auctor nulla. Nam commodo viverra
            nisi, eu volutpat odio faucibus in. In hac habitasse platea
            dictumst. Ut mi turpis, pretium vehicula maximus eu, sagittis vel
            dolor. Aliquam rhoncus turpis imperdiet diam cursus, vel volutpat
            magna mollis. Phasellus vestibulum sit amet sapien quis lacinia.
            Cras rhoncus sed ante fermentum mollis. Nulla facilisi. Fusce
            placerat aliquam sollicitudin. Cras suscipit orci a feugiat
            ultrices. Donec pretium mi pretium ex bibendum placerat. Vivamus id
            mi vel sem feugiat lacinia a vitae lacus. Aliquam sed euismod orci.
            Phasellus suscipit quam augue. Cras tristique nunc massa, vel
            viverra elit fringilla eget. Aliquam luctus et neque non laoreet. In
            hac habitasse platea dictumst. Quisque et elit ullamcorper,
            tincidunt orci in, tempor est. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Donec
            pharetra enim odio, a fermentum lectus mollis quis. Quisque semper a
            nisl id efficitur. Morbi vitae euismod risus.
          </Box>
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            congue volutpat facilisis. Sed scelerisque venenatis mi at eleifend.
            Curabitur condimentum, lectus ac posuere cursus, risus tortor
            aliquet orci, vitae consequat libero lectus id lectus. Vestibulum
            vel bibendum sem. Etiam mollis nibh convallis sollicitudin faucibus.
            Pellentesque eu imperdiet nibh, quis volutpat sapien. Proin maximus
            neque vitae lectus gravida, sed elementum eros sollicitudin.
            Phasellus vulputate nunc a velit consequat fermentum. Nam tempor a
            felis sit amet aliquam. In ut posuere metus, in consectetur metus.
            Praesent dictum lorem mauris, non ultrices justo luctus ac. Quisque
            fringilla tempus aliquam. In hac habitasse platea dictumst. Integer
            placerat libero non libero condimentum commodo. Morbi in ipsum non
            ante viverra molestie. In hac habitasse platea dictumst. Sed id est
            faucibus, ullamcorper ante sed, auctor nulla. Nam commodo viverra
            nisi, eu volutpat odio faucibus in. In hac habitasse platea
            dictumst. Ut mi turpis, pretium vehicula maximus eu, sagittis vel
            dolor. Aliquam rhoncus turpis imperdiet diam cursus, vel volutpat
            magna mollis. Phasellus vestibulum sit amet sapien quis lacinia.
            Cras rhoncus sed ante fermentum mollis. Nulla facilisi. Fusce
            placerat aliquam sollicitudin. Cras suscipit orci a feugiat
            ultrices. Donec pretium mi pretium ex bibendum placerat. Vivamus id
            mi vel sem feugiat lacinia a vitae lacus. Aliquam sed euismod orci.
            Phasellus suscipit quam augue. Cras tristique nunc massa, vel
            viverra elit fringilla eget. Aliquam luctus et neque non laoreet. In
            hac habitasse platea dictumst. Quisque et elit ullamcorper,
            tincidunt orci in, tempor est. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Donec
            pharetra enim odio, a fermentum lectus mollis quis. Quisque semper a
            nisl id efficitur. Morbi vitae euismod risus.
          </Box>
        </Container>
        <div
          style={{
            left: 0,
            bottom: 0,
            textAlign: "center",
            margin: "1rem",
            marginBottom: "4rem",
          }}
        >
          <Typography>
            Made with{" "}
            <span role="img" aria-label="blue heart">
              💙
            </span>{" "}
            and by{" "}
            <Link
              href="https://github.com/AbdulRashidReshamwala/material-portfolio"
              target="_blank"
            >
              <Typography display="inline" color="secondary" component="span">
                {" "}
                Abdul Rashid
              </Typography>
            </Link>
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Copyright &copy; 2020 All rights reserved{" "}
          </Typography>
        </div>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue);

            setValue(newValue);
          }}
          style={{
            width: "100%",
            position: "fixed",
            bottom: 0,
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </ThemeProvider>
    </>
  );
}

export default App;
