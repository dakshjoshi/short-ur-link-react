import React, { useContext, useState } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { TextField, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import { Context } from "./Context";
import Confetti from "react-confetti";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
    input: {},
    heading: {
      textAlign: "center",
    },
    entireBody: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    forgot: {},
  },
  success: {
    alignItems: "center",
    marginTop: "5rem",
    marginLeft: "2rem",
  },
}));

export const Reset = ({ variable }) => {
  const { control, handleSubmit } = useForm();
  const classes = useStyles();

  //For confetti
  const [confetti, setConfetti] = useState(false);
  const [message, setMessage] = useState("");

  //Global Context
  const [form, setForm] = useContext(Context);

  const server = `http://localhost:6969/`;
  const serverLocal = `https://short-ur-link.herokuapp.com/`;
  const domain = `https://elated-yalow-069089.netlify.app/workSpace/`;
  const webDomain = `http://localhost:3000/`;

  const newPassAdder = async (data) => {
    console.log(data);
    console.log(variable);
    data.variable = variable;

    let sentData = await axios.put(`${serverLocal}reset`, data);
    console.log(sentData);

    //After clicking on register button I should be re-directed to the login page
    setForm(2);
    if ((sentData.data.message = `PASSWORD UPDATED! CONGRATULATIONS`)) {
      setConfetti(true);
      setTimeout(() => {
        window.location.replace(`${domain}`);
      }, 3000);
    }
    setMessage(sentData.data.message);
  };
  if (!confetti) {
    return (
      <div className={classes.entireBody}>
        <form className={classes.root} onSubmit={handleSubmit(newPassAdder)}>
          <Container>
            <Controller
              control={control}
              name="password"
              type="text"
              render={({ field }) => (
                <TextField
                  label="New Password"
                  className="classes.margin"
                  {...field}
                />
              )}
            />
          </Container>

          <input type="submit" className="btn m-4 col-3 btn-dark rounded-0" />
        </form>
      </div>
    );
  } else if (confetti) {
    return (
      <div className={classes.entireBody}>
        <Confetti />

        <div className={classes.root}>
          <Container className={classes.success}>
            <h5>{message}</h5>
          </Container>
        </div>
      </div>
    );
  } else if (message !== `PASSWORD UPDATED! CONGRATULATIONS`) {
    return (
      <div className={classes.entireBody}>
        <Confetti />

        <div className={classes.root}>
          <Container className={classes.success}>
            <h5>{message}</h5>
          </Container>
        </div>
      </div>
    );
  }
};
