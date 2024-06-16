import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//create your first component
const SecondsCounter = ({
  secondsRigth,
  secondsLeft,
  minutesRigth,
  minutesLeft,
  hoursRigth,
  hoursleft,
}) => {
  return (
    <div className="container">
      <div className="bg-dark border-rounded  mt-5  col-3 d-flex justify-content-end align-items-center">
        <i className="fa-regular fa-clock text-light "></i>
        <button className="btn btn-dark">{hoursleft}</button>
        <button className="btn btn-dark">{hoursRigth}</button>
        <button className="btn btn-dark">{minutesLeft}</button>
        <button className="btn btn-dark">{minutesRigth}</button>
        <button className="btn btn-dark">{secondsLeft}</button>
        <button className="btn btn-dark">{secondsRigth}</button>
      </div>
    </div>
  );
};

export default SecondsCounter;

SecondsCounter.propTypes = {
  hoursleft: PropTypes.number,
  hoursRigth: PropTypes.number,
  minutesLeft: PropTypes.number,
  minutesRigth: PropTypes.number,
  secondsLeft: PropTypes.number,
  secondsRigth: PropTypes.number,
};
