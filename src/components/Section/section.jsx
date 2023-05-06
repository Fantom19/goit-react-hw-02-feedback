import React from "react";
import PropTypes from "prop-types";
import css from "./section.module.css"


const Section = ({ title, children }) => {
    return (
        <div>
          <h2 className={css.title}>{title}</h2>
          {children}
        </div>
    );
  };
  
  Section.propTypes = {
    title: PropTypes.string,
  };
  
  export default Section;