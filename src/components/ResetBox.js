import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Reset } from "./Reset";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  ultimateRoot: {
    height: "100vh",
    color: "#ffffff",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/spaceShip.jpeg"
    })`,
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "right",
    alignItems: "center",
  },
  root: {
    // minWidth: 275,
    minWidth: 700,
    minHeight: 400,
    background: "rgb(255,255,255,.6)",
    fontFamily: "Orbitron",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  heading: {
    fontFamily: "Orbitron",
    marginLeft: "21px",
    marginTop: "11px",
  },
});

export function ResetBox(props) {
  const classes = useStyles();

  return (
    <Box className={classes.ultimateRoot}>
      <Card className={classes.root}>
        <Typography className={classes.heading}>
          <h2>Enter New Password</h2>
        </Typography>
        <Reset variable={props.match.params.id} />
      </Card>
    </Box>
  );
}
