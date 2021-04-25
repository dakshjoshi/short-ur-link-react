import React, { useContext, useState } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { TextField, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import { Context } from "./Context";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
    input: {},
    heading: {
      textAlign: "center",
      fontFamily: "Orbitron",
      marginLeft: "21px",
      marginTop: "11px",
    },
    entireBody: {
      textAlign: "center",
      alignItems: "center",
    },
    forgot: {},
  },
}));

export const Forgot = () => {
  const { control, handleSubmit } = useForm();
  const classes = useStyles();

  //Global Context
  const [form, setForm] = useContext(Context);
  const [page, setPage] = useState(false);

  const server = `http://localhost:6969/`;
  const serverLocal = `https://short-ur-link.herokuapp.com/`;
  const domain = `https://elated-yalow-069089.netlify.app/workSpace/`;
  const webDomain = `http://localhost:3000/workSpace/`;

  const newPassAdder = async (data) => {
    console.log(data);

    let sentData = await axios.post(`${server}forgot`, data);
    console.log(sentData);

    //After clicking on register button I should be re-directed to the /userList/:id
    if (sentData.data.message == "Email Sent") {
      setPage(true);
    }
    // TO DO -->
    //window.location.replace(`${webDomain}${sentData.data._id}`);
  };

  if (!page) {
    return (
      <div className={classes.entireBody}>
        <div className="mt-4 ml-4">Enter your username</div>
        <form className={classes.root} onSubmit={handleSubmit(newPassAdder)}>
          <Container>
            <Controller
              control={control}
              name="user_id"
              type="text"
              render={({ field }) => (
                <TextField
                  label="Username"
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
  } else if (page) {
    return (
      <div className={classes.entireBody}>
        <div className={classes.root}>
          <Container>
            <div className="mt-4 ml-4">
              <h6>Password Reset Link sent on your email !</h6>
            </div>
          </Container>
        </div>
      </div>
    );
  }
};
