import React, { useEffect, useState } from "react";
import db from "../../../firebase";
import {
  GridList,
  GridListTile,
  Container,
  Card,
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  useMediaQuery,
  Tooltip,
  CircularProgress,
} from "@material-ui/core";

export default function TitlebarGridList() {
  const [projects, setProjects] = useState([]);

  const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  useEffect(() => {
    let v = db.collection("project");
    let temp = [];
    v.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        temp = [...temp, doc.data()];
      });
      setProjects(temp.reverse());
    });
  }, []);

  return (
    <Container style={{ marginTop: "2rem" }}>
      {projects.length < 1 ? (
        <div style={{ textAlign: "center" }} size="500">
          <CircularProgress size={100} />
        </div>
      ) : null}
      <GridList cols={matches ? 2 : 1} cellHeight={"auto"} spacing={16}>
        {projects.map((p) => (
          <GridListTile key={p.image}>
            <Card>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="260"
                image={p.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {p.name}
                </Typography>
                <Tooltip title={p.desc}>
                  <Typography
                    variant="body1"
                    component="p"
                    noWrap={matches}
                    style={{ paddingBottom: "8px" }}
                  >
                    {p.desc}
                  </Typography>
                </Tooltip>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                  style={{ marginRight: ".25rem" }}
                >
                  Tags :
                </Typography>
                {p.tags.map((t) => (
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="span"
                    key={t}
                    style={{ margin: ".25rem", textTransform: "uppercase" }}
                  >
                    {t}
                  </Typography>
                ))}
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="span"
                    style={{ marginRight: ".25rem" }}
                  >
                    Tech :
                  </Typography>
                  {p.tech.map((t) => (
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      component="span"
                      key={t}
                      style={{ margin: ".25rem", textTransform: "uppercase" }}
                    >
                      {t}
                    </Typography>
                  ))}
                </div>
              </CardContent>
              <CardActions>
                {p.actions.map((a) => (
                  <Button
                    variant="contained"
                    color={a.title === "code" ? "primary" : "secondary"}
                    onClick={() => window.open(a.link)}
                  >
                    {a.title}
                  </Button>
                ))}
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
}
