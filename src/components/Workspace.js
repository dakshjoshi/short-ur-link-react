import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Container,
  Button,
  AppBar,
  IconButton,
  Toolbar,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return width;
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg3.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  navbar: {
    backgroundColor: "rgba(0,0,0)",
    fontFamily: "Orbitron",
    height: "8vh",
    paddingTop: ".2rem",
    [theme.breakpoints.down("sm")]: { paddingTop: "none" },
  },
  header: {
    //background: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Orbitron",
  },
  wrapper: {
    width: "90%",
    margin: "0 auto",
    //background: "none",
  },
  sul: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  name: {
    borderBottom: 1,
  },
  form: {
    alignItems: "center",
  },
  iconForSearch: {
    fontSize: "4rem",
    color: "#ffffff",
  },
  input: {
    width: "80vh",
    color: "#ffffff",
    background: "none",
    border: "none",
    padding: "1rem",
    fontSize: "1rem",
    fontFamily: "Orbitron",
    [theme.breakpoints.down("sm")]: {
      width: "10vh",
    },
  },
  addLink: {
    display: "flex",
  },
  forMargin: {
    marginLeft: "23%",
    marginTop: "5rem",
    marginBottom: "2rem",
  },
  welcomeBack: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
}));

export const Workspace = (props) => {
  console.log(props);
  const classes = useStyles();
  const { control, register, handleSubmit } = useForm();

  const width = WindowWidth();
  console.log(width);

  const server = `http://localhost:6969/`;
  const webDomain = `http://localhost:3000/`;

  const serverOnline = `https://short-ur-link.herokuapp.com/`;
  const domain = `https://elated-yalow-069089.netlify.app/`;

  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(async () => {
    let userData = await axios.get(
      `${serverOnline}userList/${props.match.params.id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(`userDATA --> `, userData.data);

    setDataToDisplay(userData.data.user);
  }, []);

  const addLink = async (data) => {
    await axios.put(`${serverOnline}userList/${props.match.params.id}`, data);
    console.log(data);
    window.location.reload(true);
  };

  const [dataToDisplay, setDataToDisplay] = useState({
    name: "",
    Links: [{ fullform: "", shortform: "" }],
  });

  const dataData = {
    name: "",
    Links: [{ fullform: "", shortform: "" }],
  };

  console.log(dataToDisplay);

  const deleteLink = async (link) => {
    await axios.put(`${serverOnline}workSpace/${props.match.params.id}`, link);
    window.location.reload(true);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h2 className={classes.sul}>SHORT-UR-LINK</h2>
          <h3 className={classes.welcomeBack}>
            Welcome Back,
            {dataToDisplay.name}
          </h3>
        </Toolbar>
      </AppBar>

      <form
        className={classes.form}
        onSubmit={handleSubmit(addLink)}
        className="m-5 justify-text-centre"
      >
        <Container className={classes.addLink}>
          <div className={classes.forMargin}>
            <input
              type="text"
              className={classes.input}
              id="addBar"
              placeholder="Please add  https://"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              {...register("linkToAdd")}
            />

            <input type="submit" className="btn btn-light rounded-0 m-2" />
          </div>
        </Container>
      </form>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>S. No.</th>
            {width > 600 && <th>Fullform</th>}
            <th>SuL</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {
            dataToDisplay.Links.filter(
              (link) => link.fullform && link.shortform != null
            ).map((link, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  {width > 600 && <td>{link.fullform}</td>}

                  {width > 600 ? (
                    <td>{`${domain}SuL/${link.shortform}`}</td>
                  ) : (
                    <td>{`${link.shortform}`}</td>
                  )}

                  <td>
                    <button
                      className="btn text-light rounded-0"
                      onClick={() =>
                        deleteLink({
                          linkToDelete: link.fullform,
                        })
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
            //
          }
        </tbody>
      </table>
      {
        //Add a loading icon
      }
    </div>
  );
};
