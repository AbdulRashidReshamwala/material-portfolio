import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineConnector,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
} from "@material-ui/lab";
import {
  ChildCare,
  MenuBook,
  School,
  AddShoppingCart,
  AllInclusive,
  Casino,
  Public,
  Functions,
  Android,
} from "@material-ui/icons";
import { Paper, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 8px",
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate" style={{ maxWidth: 960, margin: "auto" }}>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2020
          </Typography>
          <Typography variant="body2">OpenSource Contribution</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Android />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Flutter TFlite Plugin
            </Typography>
            <Typography>
              Added the ability to use GPU delegate while inference for faster
              inference.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2020
          </Typography>
          <Typography variant="body2">OpenSource Contribution</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Functions />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Tensorflow
            </Typography>
            <Typography>Fixed error in documentation.</Typography>
            <Typography>Reported Bugs.</Typography>
            <Typography>Work with lead maintainers to fix bugs</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2020
          </Typography>
          <Typography variant="body2">OpenSource Contribution</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Public />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              CaMicroscope
            </Typography>
            <Typography>Fixed bugs realted to UI.</Typography>
            <Typography>Fixed Memory Leaks</Typography>
            <Typography>
              Added various feature such as ability to convert data genrated by
              it into standard Imagenet format
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2020
          </Typography>
          <Typography variant="body2">Freelance</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Casino />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              The Board Game CO
            </Typography>
            <Typography>
              Build and deployed multiple games and gameroom managment system
              with the ability to be controlled realtime
            </Typography>
            <Typography>
              The system also have a game creation tool where users can create
              entire games without coding
            </Typography>
            <Typography>
              The system is used by more then 20k+ users and is built completly
              using serverless technology by companies like Adobe, LinkedIn ,
              Flipkart
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2019
          </Typography>
          <Typography variant="body2">Work</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AllInclusive />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Auxillo Finserve
            </Typography>
            <Typography>Data Analysis Internship</Typography>
            <Typography>
              Design and develop algorithm for various internal operations
            </Typography>
            <Typography>
              Write automated scripts to extract data from websites
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017-2019
          </Typography>
          <Typography variant="body2">Work</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AddShoppingCart />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Creeda BGC
            </Typography>
            <Typography>Web Developer </Typography>
            <Typography>
              Rebuilt the entire{" "}
              <Link
                style={{ color: "white", fontWeight: "bold" }}
                href="https://creeda.in"
                target="_blank"
              >
                {" "}
                creeda.in
              </Link>{" "}
              wesite
            </Typography>
            <Typography>Building and maintaining Ecommerce module</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017
          </Typography>
          <Typography variant="body2">Education</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <School />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              College
            </Typography>
            <Typography>Wilson College of Science</Typography>
            <Typography>Score : 73%</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2015
          </Typography>
          <Typography variant="body2">Education</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MenuBook />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              School
            </Typography>
            <Typography>ST. Xaviers High School</Typography>
            <Typography>Score : 84%</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <ChildCare />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Birth
            </Typography>
            <Typography>Hello World!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
