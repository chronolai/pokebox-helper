import React from "react";

function Pokemon(props) {
  const { id } = props;
  const padID = id.toString().padStart(3, "0");
  return <span className={`sprite-icon sprite-icon-${padID}`}></span>;
}

export default Pokemon;
