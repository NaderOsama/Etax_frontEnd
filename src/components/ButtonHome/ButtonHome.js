import React from "react";
import "./ButtonHome.css";
import { Link } from "react-router-dom";
const ButtonHome = (props) => {
  return (
    <>
      <Link
        className="text-white btn btn-primary bg-button btn-log"
        aria-current="page"
        to={props.HomeOrNot}
        type="submit"
        onClick={props.action}
      >
        {props.title}
      </Link>
    </>
  );
};

export default ButtonHome;
