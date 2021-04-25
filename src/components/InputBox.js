import React from "react";
import "../App.css";

export const InputBox = () => {
  return (
    <div>
      <form action="" class="search-form">
        <input
          type="text"
          placeholder="Search"
          id="search"
          autocomplete="off"
        />
      </form>
    </div>
  );
};
