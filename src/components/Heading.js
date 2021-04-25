import React, { useState, useEffect, useContext } from "react";
import { Context } from "./Context";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link } from "react-router-dom";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg3.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  navbar: {
    background: "none",
    fontFamily: "Orbitron",
    marginTop: "1rem",
  },
  icon: {
    color: "#ffffff",
    fontSize: "2rem",
  },
  heading: {
    flexGrow: 1,
  },
  wrapper: {
    width: "90%",
    margin: "0 auto",
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
  },
  searchBar: {
    marginLeft: "5%",
    display: "flex",
  },
  middle: {
    textAlign: "center",
  },
  iconForSearchContainer: {
    marginLeft: "1rem",
  },
  iconDown: {
    fontSize: "3rem",
    color: "#ffffff",
  },
  iconDownContainer: {
    marginTop: "3rem",
  },
}));

export default function Header() {
  //Global context for register or login form display
  const [form, setForm] = useContext(Context);

  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className={classes.root} id="top-page">
      <AppBar className={classes.navbar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <h2 className={classes.heading}>
            <Scroll to="top-page" smooth={true}>
              SHORT-UR-LINK
            </Scroll>
          </h2>

          <Scroll to="log-reg-page" smooth={true}>
            <IconButton onClick={() => setForm(0)}>
              <AddRoundedIcon className={classes.icon} />
            </IconButton>
          </Scroll>

          <Scroll to="log-reg-page" smooth={true}>
            <IconButton onClick={() => setForm(1)}>
              <PersonRoundedIcon className={classes.icon} />
            </IconButton>
          </Scroll>
        </Toolbar>
      </AppBar>

      <Collapse
        in={display}
        {...(display ? { timeout: 1000 } : {})}
        collapsedHeight={80}
      >
        <div className={classes.middle}>
          <div className={classes.searchBar}>
            <input
              type="text"
              className={classes.input}
              id="searchBar"
              placeholder="Enter Link"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className={classes.iconForSearchContainer}>
              <Scroll to="log-reg-page" smooth={true}>
                <IconButton onClick={() => setForm(0)}>
                  <SearchRoundedIcon className={classes.iconForSearch} />
                </IconButton>
              </Scroll>
            </div>
          </div>
          <div className={classes.iconDownContainer}>
            <Scroll to="log-reg-page" smooth={true}>
              <IconButton>
                <ExpandMoreRoundedIcon className={classes.iconDown} />
              </IconButton>
            </Scroll>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
