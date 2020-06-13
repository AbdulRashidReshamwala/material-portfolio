import React from "react";
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

export default function ContactPage() {
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
                  href="https://drive.google.com/file/d/1sBT1KCuKiJbOaYgko8EC3rvzp1E9ESKz/view"
                  target="_blank"
                >
                  <Button
                    variant="contained"
                    style={{ margin: 8 }}
                    color="secondary"
                    fullWidth
                  >
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
                style={{ marginTop: "1.2rem" }}
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
                label="Title"
                style={{ marginTop: "1.2rem" }}
                id="emailInput"
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
                label="Message"
                id="emailInput"
                style={{ marginTop: "1.2rem" }}
                multiline
                rows={5}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <Button
                style={{ marginTop: "1.2rem" }}
                variant="contained"
                fullWidth
                color="primary"
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
