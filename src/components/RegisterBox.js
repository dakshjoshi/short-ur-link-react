import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { borders } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { Register } from "./Register";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    fontFamily: "Orbitron",
    // minWidth: 275,
    minWidth: 700,
    minHeight: 400,
    background: "rgb(255,255,255,.6)",
  },
  content: {},
  mainContent: {},
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

export default function RegisterBox() {
  const classes = useStyles();

  return (
    <Box border={0}>
      <Card className={classes.root}>
        <Typography className={classes.heading}>
          <h2>Register</h2>
        </Typography>
        <Register />
      </Card>
    </Box>
  );
}
