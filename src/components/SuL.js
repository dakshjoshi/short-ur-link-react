import React, { useEffect } from "react";
import axios from "axios";

export const SuL = (props) => {
  //get the data, pinpoint the fullform link and re-direct to it.

  const server = `https://short-ur-link.herokuapp.com/`;
  const serverLocal = `http://localhost:6969/`;

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
      {/* Redirecting Page */}
      <div className="d-flex  m-5 justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
