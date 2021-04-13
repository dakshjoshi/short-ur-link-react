import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { TextField, Container, Button } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import "fontsource-roboto";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
    input: {},
  },
}));

export const Register = () => {
  const classes = useStyles();
  const { control, register, handleSubmit } = useForm();

  const serverLocal = `http://localhost:6969/`;
  const server = `https://short-ur-link.herokuapp.com/`;

  // const redirect = async () => {
  //   console.log("This works");

  // };

  const newUserAdder = async (data) => {
    console.log(data);

    let sentData = await axios.post(`${server}userList`, data);

    //After clicking on register button I should be re-directed to the /userList/:id
    // redirect();
    let incomingData = await axios.get(`${server}userList`);
    let reDirectTo = incomingData.data;
    let ect = reDirectTo.filter((reDir) => reDir.user_id == data.user_id);
    console.log(ect);
  };

  return (
    <div className="changeFont">
      <h2>Register</h2>
      <form className={classes.root} onSubmit={handleSubmit(newUserAdder)}>
        <Container>
          <Controller
            control={control}
            name="name"
            type="text"
            render={({ field }) => (
              <TextField
                label="Name"
                className={classes.input}
                {...field}
              ></TextField>
            )}
          />

          <Controller
            control={control}
            name="number"
            type="text"
            render={({ field }) => <TextField label="Phone" {...field} />}
          />
        </Container>

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

          <Controller
            control={control}
            name="password"
            type="password"
            render={({ field }) => (
              <TextField label="Password" margin="1" {...field} />
            )}
          />
        </Container>

        <input type="submit" className="btn m-4 col-3 btn-dark rounded-0" />
      </form>
    </div>
  );
};
