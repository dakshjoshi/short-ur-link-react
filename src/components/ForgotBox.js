import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Forgot } from "./Forgot";
import DoneIcon from "@material-ui/icons/Done";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    minWidth: 700,
    minHeight: 400,
    background: "rgb(255,255,255,.6)",
    fontFamily: "Orbitron",
    [theme.breakpoints.down("sm")]: {
      minWidth: 200,
      minHeight: 200,
    },
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
  div: {
    display: "flex",
    justifyContent: "center",
    marginTop: "4rem",
    alignItems: "center",
  },
  tick: {
    fontSize: "4rem",
  },
}));

export default function ForgotBox() {
  const classes = useStyles();
  const [sent, mailSent] = useState(false);
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box>
      <Card className={classes.root}>
        {sent == false ? (
          <div>
            <Typography className={classes.heading}>
              <h2>Forgot ?</h2>
            </Typography>
            <Forgot />
          </div>
        ) : (
          <div className={classes.div}>
            <h3>MAIL SENT</h3>
          </div>
        )}
      </Card>
    </Box>
  );
}
