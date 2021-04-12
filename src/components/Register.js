import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Register = () => {
  const { register, handleSubmit } = useForm();

  const serverLocal = `http://localhost:6969/`;
  const server = `https://short-ur-link.herokuapp.com/`;

  const newUserAdder = async (data) => {
    console.log(data);

    let sentData = await axios.post(`${server}userList`, data);

    //After clicking on register button I should be re-directed to the /userList/:id
  };

  return (
    <div>
      Register
      <form onSubmit={handleSubmit(newUserAdder)}>
        <input
          placeholder="Name"
          type="text"
          {...register("name")}
          className=""
        />
        <input placeholder="Number" type="text" {...register("number")} />
        <input placeholder="Username" type="text" {...register("user_id")} />
        <input
          placeholder="Password"
          type="password"
          {...register("password")}
        />

        <input type="submit" input="btn rounded-0" />
      </form>
    </div>
  );
};
