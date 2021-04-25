import React, { createContext, useState } from "react";

export const Context = createContext();

export const FormDefault = (props) => {
  const [form, setForm] = useState(0);

  return (
    <Context.Provider value={[form, setForm]}>
      {props.children}
    </Context.Provider>
  );
};
