import React from "react";
const Dropmenu = props => {
  return (
    <select onChange={props.sort}>
      <option value="" disabled>
        Sort As
      </option>
      <option value="name">Name</option>
      <option value="date">Date</option>
    </select>
  );
};
export default Dropmenu;
