import React, { useContext } from "react";
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
    },
    entireBody: {
      textAlign: "center",
      alignItems: "center",
    },
  },
}));

export const Admin = () => {
  const { control, handleSubmit } = useForm();
  const classes = useStyles();

  //Global Context
  const [form, setForm] = useContext(Context);

  const server = `http://localhost:6969/`;
  const serverLocal = `https://short-ur-link.herokuapp.com/`;
  const domain = `https://elated-yalow-069089.netlify.app/`;
  const webDomain = `http://localhost:3000/`;

  const newUserAdder = async (data) => {
    console.log(data);

    //OLD -->
    //let sentData = await axios.post(`${server}userLogin/${data.user_id}`, data);

    let sentData = await axios.post(`${serverLocal}adminLogin`, data);
    console.log(`sentData -->`, sentData);

    //After clicking on register button I should be re-directed to the /userList/:id
    localStorage.setItem("token", sentData.data.token);
    // TO DO -->
    window.location.replace(`${domain}admin`);
  };

  return (
    <div className={classes.entireBody}>
      <form className={classes.root} onSubmit={handleSubmit(newUserAdder)}>
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
          className="btn btn-dark rounded-0 m-4 col-3"
          onClick={() => {
            setForm(0);
          }}
        >
          Back
        </button>
        <input type="submit" className="btn m-4 col-3 btn-dark rounded-0" />
      </form>
    </div>
  );
};
