import React from "react";
import "./Listitem.css";
const colors = [
  "#689F38",
  "#26A69A",
  "#8BC34A",
  "#4FC3F7",
  "#D500F9",
  "#FFA726",
  "#1565C0",
  "#00BCD4",
];

const Listitem = (props) => {
  const random = () => {
    return colors[Math.floor(Math.random() * 7 + 1)];
  };
  const getTime = () => {
    return new Date(props.data.date).toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  const doctorName = props.data.docname
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  const locationName = props.data.locname
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

  return (
    <li className="w3-bar">
      {/* w3-hide-small */}
      <div className="circle-listitem" style={{ backgroundColor: random() }}>
        {props.data.docname.substring(0, 2) === "Dr"
          ? props.data.docname
              .substring(3, props.data.docname.length)
              .trim()[0]
              .toUpperCase()
          : props.data.docname[0].toUpperCase()}
      </div>

      <div className="items">
        <div className="left-elements">
          <span className="name-listitem">{`Dr. ${doctorName}`} </span>
          <span className="place-listitem">{locationName}</span>
        </div>
        <span className="date-listitem">
          {new Date(props.data.date).toShortFormat()}
          <br />
          {getTime(props.data.date)}
        </span>
      </div>
    </li>
  );
};

// eslint-disable-next-line
Date.prototype.toShortFormat = function () {
  var month_names = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var day = this.getDate();
  var month_index = this.getMonth();
  var year = this.getFullYear();

  return "" + day + " " + month_names[month_index] + " " + year;
};
export default Listitem;
