import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const Workspace = (props) => {
  const { register, handleSubmit } = useForm();

  const serverLocal = `http://localhost:6969/`;
  const domain = `http://localhost:3000/`;
  const server = `https://short-ur-link.herokuapp.com/`;

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
      <h2>workSpace</h2>
      <h3>Welcome Back {dataToDisplay.name}</h3>
      <form onSubmit={handleSubmit(addLink)}>
        <input
          placeholder="Shorten Link"
          type="text"
          {...register("linkToAdd")}
        />
        <input type="submit" />
      </form>
      {
        dataToDisplay.Links.filter(
          (link) => link.fullform && link.shortform != null
        ).map((link, i) => {
          return (
            <div key={i}>
              {link.fullform}
              {`${domain}SuL/${link.shortform}`}
              {/* {domain}SuL/{link.shortform} */}
              <button
                onClick={() =>
                  deleteLink({
                    linkToDelete: link.fullform,
                  })
                }
              >
                Delete
              </button>
            </div>
          );
        })
        //
      }
      {
        //Add a loading icon
      }
    </div>
  );
};
