import React from "react";
import PropTypes from "prop-types";
import "./QuoteNOptionComponent.css";

const Options = ({ options }) => {
  return (
    <div className="options">
      <ul className="answerOptions">
        {options.map(function(item) {
          return (
            <li key={item.title} className="answerOption">
              <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                id={item.value}
              />
              <label className="radioCustomLabel" htmlFor={item.value}>
                {item.value}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.array
};

export default Options;
