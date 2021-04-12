import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const serverLocal = `http://localhost:6969/`;
  const server = `https://short-ur-link.herokuapp.com/`;

  const newUserAdder = async (data) => {
    console.log(data);

    let sentData = await axios.post(`${server}userLogin`, data);

    //After clicking on register button I should be re-directed to the /userList/:id
  };

  return (
    <div>
      Register
      <form onSubmit={handleSubmit(newUserAdder)}>
        <input placeholder="Username" type="text" {...register("user_id")} />
        <input
          placeholder="Password"
          type="password"
          {...register("password")}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
