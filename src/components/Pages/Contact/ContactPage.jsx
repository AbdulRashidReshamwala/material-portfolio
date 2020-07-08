import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Link,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { AccountCircle, Title } from "@material-ui/icons";
import githubLogo from "./Octocat.png";
import linkedinLogo from "./linkedinLogo.png";
import youtubeLogo from "./ytlogo.png";

const url = "https://asia-east2-v2-portfolio.cloudfunctions.net/contactForm";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");

  const submitForm = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) ||
      email.length > 256
    ) {
      alert("Invalid Email");
      return;
    }
    if (title.length < 3) {
      alert("Title too short");
    }
    axios
      .post(url, {
        email: email,
        title: title,
        msg: msg,
      })
      .then(
        () => {
          setEmail("");
          setTitle("");
          setMsg("");
          alert("Submit Sucessfull");
        },
        (error) => {
          alert("Error Could not submit");
          console.log(error);
        }
      );
  };

  return (
    <Container style={{ marginTop: 24 }}>
      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div
              style={{
                marginTop: "2rem",
                marginRight: "2rem",
                marginLeft: "2rem",
              }}
            >
              <Typography variant="h3" gutterBottom>
                Contact Info
              </Typography>
              <Typography variant="body1" gutterBottom>
                Don't be a stranger just say hello {"👋"}. Feel free to get in
                touch with me. I am always open to discussing new projects ideas
                or opportunities.{"👨‍💻"}
              </Typography>
              <div>
                <Link href="mailto:abdulrreshamwala@gmail.com">
                  <Button variant="contained" style={{ margin: 8 }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        textTransform: "uppercase",
                        wordWrap: "break-word",
                      }}
                    >
                      {"📨 : "}ar1242112@gmail.com
                    </Typography>
                  </Button>
                </Link>
              </div>
              <div>
                <Link href="tel:+91-9004800869">
                  <Button variant="contained" style={{ margin: 8 }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        textTransform: "uppercase",
                        wordWrap: "break-word",
                      }}
                    >
                      {"📱 : "}+91-9004800869
                    </Typography>
                  </Button>
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.youtube.com/channel/UCYAyEnZHbSDIenU18KsD3HQ"
                  target="_blank"
                >
                  <Button variant="contained" style={{ margin: 8 }}>
                    <img
                      alt="YouTube Logo"
                      height="32"
                      src={youtubeLogo}
                      style={{ marrginLeft: 6, marrginright: 6 }}
                    />
                    YouTube
                  </Button>
                </Link>
              </div>
              <Link
                href="https://github.com/AbdulRashidReshamwala"
                target="_blank"
              >
                <Button variant="contained" style={{ margin: 8 }}>
                  <img
                    alt="Github Logo"
                    height="32"
                    src={githubLogo}
                    style={{ marrginLeft: 6, marrginright: 6 }}
                  />
                  Github
                </Button>
              </Link>

              <Link
                href="https://www.linkedin.com/in/abdul-rashid-reshamwala-141525181/"
                target="_blank"
              >
                <Button
                  variant="contained"
                  style={{ marrginLeft: 6, marrginright: 6 }}
                >
                  <img alt="Linkedin Logo" height="32" src={linkedinLogo} />
                  Linkedin
                </Button>
              </Link>
              <div>
                <Link
                  href="https://drive.google.com/file/d/1rohIFJ91_qd1fvIJ-o_DzuhInp64NVnv/view?usp=sharing"
                  target="_blank"
                >
                  <Button variant="contained" style={{ margin: 8 }} fullWidth>
                    <Typography
                      variant="subtitle1"
                      style={{
                        textTransform: "uppercase",
                        wordWrap: "break-word",
                      }}
                    >
                      {"📄  "}Resume
                    </Typography>
                  </Button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ margin: "2rem" }}>
              <Typography variant="h4" gutterBottom>
                Have a Question?
              </Typography>
              <TextField
                fullWidth
                label="Email"
                id="emailInput"
                required
                value={email}
                style={{ marginTop: "1.2rem" }}
                onChange={(e) => setEmail(e.target.value.trim())}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <TextField
                fullWidth
                required
                label="Title"
                value={title}
                style={{ marginTop: "1.2rem" }}
                onChange={(e) => setTitle(e.target.value.trim())}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Title />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <TextField
                fullWidth
                required
                label="Message"
                onChange={(e) => setMsg(e.target.value.trim())}
                style={{ marginTop: "1.2rem" }}
                multiline
                value={msg}
                rows={5}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span></span>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <Button
                style={{ marginTop: "1.2rem" }}
                variant="contained"
                fullWidth
                color="primary"
                onClick={submitForm}
              >
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
