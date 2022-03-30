import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
