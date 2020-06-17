import React from "react";
import { Typography } from "@material-ui/core";
import Typed from "react-typed";

export default function AboutPage({ darkState }) {
  return (
    <div className="purple-quartz">
      <div className="center">
        <Typography
          variant="h2"
          component="h2"
          color={darkState ? "inherit" : "secondary"}
          style={{
            padding: 12,
            fontWeight: 500,
            fontFamily: "Comfortaa, cursive",
            textTransform: "capitalize",
            color: darkState ? "white" : "#101010",
          }}
          gutterBottom
        >
          Hola, I'm Abdul Rashid!
        </Typography>
        <Typography variant="h3" align="center">
          <Typed
            strings={[
              "ReactJS ⚛️",
              "Tensorflow 🤖",
              "Firebase 🔥",
              "Dart 🎯",
              "Blockchain 🔗",
            ]}
            typeSpeed={100}
            backSpeed={60}
            loop
            style={{
              color: darkState ? "white" : "#101010",
              fontFamily: "Comfortaa, cursive",
              textTransform: "capitalize",
            }}
          />
        </Typography>
      </div>
    </div>
  );
}
