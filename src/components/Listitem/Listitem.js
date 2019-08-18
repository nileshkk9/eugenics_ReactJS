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
  "#00BCD4"
];
const Listitem = props => {
  return (
    <li className="w3-bar">
      <div
        className="circle-listitem w3-hide-small"
        style={{ backgroundColor: random() }}
      >
        {props.data.docname.substring(0, 2) === "Dr"
          ? props.data.docname
              .substring(3, props.data.docname.length)
              .trim()[0]
              .toUpperCase()
          : props.data.docname[0].toUpperCase()}
      </div>
      {/* {console.log(props.data)} */}

      <div className="items">
        <div className="left-elements">
          <span className="name-listitem">{props.data.docname} </span>
          <span className="place-listitem">{props.data.place}</span>
        </div>
        <span className="date-listitem">
          {new Date(props.data.date).toShortFormat()}
        </span>
      </div>
    </li>
  );
};

const random = () => {
  return colors[Math.floor(Math.random() * 7 + 1)];
};
Date.prototype.toShortFormat = function() {
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
    "Dec"
  ];

  var day = this.getDate();
  var month_index = this.getMonth();
  var year = this.getFullYear();

  return "" + day + " " + month_names[month_index] + " " + year;
};
export default Listitem;
