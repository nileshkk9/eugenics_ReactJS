import React from "react";
const Dropmenu = props => {
  return (
    <select onChange={props.sort} className="dropdown-select">
      <option value="date">Date</option>
      <option value="place">Place</option>
      <option value="quali">Qualification</option>
    </select>
  );
};
export default Dropmenu;
