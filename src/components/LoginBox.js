import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Login } from "./Login";
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
  headingg: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      textAlign: "center",
    },
  },
}));

export default function LoginBox() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box>
      <Card className={classes.root}>
        <Typography className={classes.heading}>
          <h2 className={classes.headingg}>Log In</h2>
        </Typography>
        <Login />
      </Card>
    </Box>
  );
}
