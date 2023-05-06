import React from "react";
import PropTypes from "prop-types";
import css from "./statistics.module.css"

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.list}>
      <ul>
        <li>GOOD: {good}</li>
        <li>NEUTRAL: {neutral}</li>
        <li>BAD: {bad}</li>
        <li>TOTAL: {total}</li>
        <li>POSITIVE FEEDBACK: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistic;