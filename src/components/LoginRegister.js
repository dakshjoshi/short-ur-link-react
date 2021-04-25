import React, { useState, useContext } from "react";
import { Context } from "./Context";
import { makeStyles } from "@material-ui/core/styles";
import RegisterBox from "./RegisterBox";
import LoginBox from "./LoginBox";
import Box from "@material-ui/core/Box";
import AdminBox from "./AdminBox";
import Confetti from "react-confetti";
import ForgotBox from "./ForgotBox";

const useStyles = makeStyles((theme) => ({
  root: {
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
  forms: {
    width: "100%",
    margin: "0 auto",
  },
  register: {
    background: "rgb(255,255,255,.4)",
  },
  bos: {
    height: "3rem",
    width: "3rem",
    margin: "4.9rem",
    marginBottom: "3rem",
    backgroundColor: "white",
    alignItems: "left",
  },
}));

export const LoginRegister = () => {
  //Global context for register or login form display
  const [form, setForm] = useContext(Context);
  const classes = useStyles();
  const openAdmin = () => {
    setForm(2);
  };
  return (
    <div className={classes.root} id="log-reg-page">
      <div className={classes.bos} onClick={openAdmin}></div>
      <Box flexDirection="row">
        {form == 0 && <RegisterBox className={classes.register} />}

        {form == 1 && <LoginBox className={classes.login} />}

        {form == 2 && <AdminBox className={classes.admin} />}
        {form == 3 && <ForgotBox className={classes.forgot} />}
      </Box>
      <div className={classes.bos}></div>
    </div>
  );
};
