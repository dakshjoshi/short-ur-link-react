import React, { useEffect } from "react";
import axios from "axios";

export const SuL = (props) => {
  //get the data, pinpoint the fullform link and re-direct to it.

  const server = `http://localhost:6969/`;

  useEffect(async () => {
    let data = await axios.get(`${server}refer/${props.match.params.id}`);
    let Links = data.data.Links;
    let theLink = Links.filter(
      (link) => link.shortform == props.match.params.id
    );
    console.log(theLink);

    window.location.href = `${theLink[0].fullform}`;
  }, []);

  return (
    <div>
      Redirecting Page
      {
        //Add a loading icon
      }
    </div>
  );
};
