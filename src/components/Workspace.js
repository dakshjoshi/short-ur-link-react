import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Container, Button } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "75",
    },
    input: {},
  },
}));

export const Workspace = (props) => {
  const { control, handleSubmit } = useForm();

  const server = `http://localhost:6969/`;
  const domain = `http://localhost:3000/`;
  const serverWeb = `https://short-ur-link.herokuapp.com/`;

  const addLink = async (data) => {
    await axios.put(`${server}userList/${props.match.params.id}`, data);
    console.log(data);
    window.location.reload(true);
  };

  const [dataToDisplay, setDataToDisplay] = useState({
    name: "",
    Links: [{ fullform: "", shortform: "" }],
  });

  console.log(dataToDisplay);

  useEffect(async () => {
    let userData = await axios.get(
      `${server}userList/${props.match.params.id}`
    );
    setDataToDisplay(userData.data.user);
  }, []);

  const deleteLink = async (link) => {
    await axios.put(`${server}workSpace/${props.match.params.id}`, link);
    window.location.reload(true);
  };

  return (
    <div>
      <h2>WorkSpace</h2>
      <h3>Welcome Back {dataToDisplay.name}</h3>
      <form
        onSubmit={handleSubmit(addLink)}
        className="m-5 justify-text-centre"
      >
        <Container>
          <Controller
            control={control}
            name="linkToAdd"
            type="text"
            render={({ field }) => (
              <TextField
                label="Shorten Link"
                style={{ width: 600 }}
                {...field}
              />
            )}
          />

          <input type="submit" className="btn btn-dark rounded-0 m-2" />
        </Container>
      </form>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>FullForm</th>
            <th>SuL Link</th>
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
                  <td>{i}</td>
                  <td>{link.fullform}</td>
                  <td>{`${domain}SuL/${link.shortform}`}</td>
                  <td>
                    <button
                      className="btn btn-light"
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
