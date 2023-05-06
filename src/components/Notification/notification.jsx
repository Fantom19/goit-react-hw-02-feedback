import React from "react";
import PropTypes from "prop-types";
import css from "./notiflication.module.css"

const Notification = ({ title }) => {
    return (
      <div>
        <h2 className={css.title}>{title}</h2>
      </div>
    );
  };
  
  Notification.propTypes = {
    title: PropTypes.string.isRequired,
  };
  export default Notification;