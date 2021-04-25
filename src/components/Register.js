import React, { useEffect, useState, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { TextField, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";

//Global Context
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
    },
  },
}));

export const Register = () => {
  //Global Context
  const [form, setForm] = useContext(Context);

  //For confetti
  const [confetti, setConfetti] = useState(false);

  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const { control, register, handleSubmit } = useForm();

  const serverLocal = `http://localhost:6969/`;
  const server = `https://short-ur-link.herokuapp.com/`;

  const newUserAdder = async (data) => {
    console.log(data);

    // //This is a post require which is very important
    let sentData = await axios.post(`${server}userList`, data);
    setConfetti(true);
    console.log(sentData);

    setForm(1);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  if (!confetti) {
    return (
      <div className="text-centre">
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
              name="email"
              type="text"
              render={({ field }) => <TextField label="Email" {...field} />}
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
          <button
            className="btn m-4 col-4 btn-dark border-dark border-bottom  rounded-0"
            onClick={() => {
              setForm(1);
            }}
          >
            Already Existing User
          </button>
          <input type="submit" className="btn m-4 col-3 btn-dark rounded-0" />
        </form>
      </div>
    );
  } else if (confetti) {
    return (
      <div className="text-centre">
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
              name="email"
              type="text"
              render={({ field }) => <TextField label="Email" {...field} />}
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
          <button
            className="btn m-4 col-4 btn-dark border-dark border-bottom  rounded-0"
            onClick={() => {
              setForm(1);
            }}
          >
            Already Existing User
          </button>
          <input type="submit" className="btn m-4 col-3 btn-dark rounded-0" />
        </form>
      </div>
    );
  }
};
