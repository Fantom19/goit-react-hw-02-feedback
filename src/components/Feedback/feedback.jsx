import React from "react";
import PropTypes from "prop-types";
import css from "./feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((item) => (
        <button
          className={css.btn}
          key={item}
          name={item}
          type="button"
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;