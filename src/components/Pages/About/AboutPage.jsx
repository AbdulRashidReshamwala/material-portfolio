import React from "react";
import { Box, Container } from "@material-ui/core";

export default function AboutPage() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            right: 0,
            bottom: "4.5rem",
            content: "",
            opacity: ".2",
            zIndex: "-2",
            width: "50%",
            background: "#3e64ff",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: "4.5rem",
            content: "",
            opacity: ".2",
            zIndex: "-2",
            width: "50%",
            background: "#3e64ff",
          }}
        ></div>
        <Container></Container>
      </Box>
    </>
  );
}
