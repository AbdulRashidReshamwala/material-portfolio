import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar/Navbar";

import {
  Container,
  Box,
  CssBaseline,
  Typography,
  Link,
} from "@material-ui/core";

function App() {
  const [darkState, setDarkState] = useState(true);

  const palletType = darkState ? "dark" : "light";

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
          style={{ left: 0, bottom: 0, textAlign: "center", margin: "2rem" }}
        >
          <Typography>
            Made with 💙 and by{" "}
            <Link href="https://google.com" target="_blank">
              <Typography display="inline"> Abdul Rashid</Typography>
            </Link>
          </Typography>
          <Typography variant="caption">
            Copy right &copy; All rights reserved{" "}
          </Typography>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
