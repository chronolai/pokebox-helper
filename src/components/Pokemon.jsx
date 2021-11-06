import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import pokemon from "../pokemon";

function Pokemon(props) {
  const { id } = props;
  const padID = id.toString().padStart(3, "0");

  const pm = pokemon.find((pm) => pm[0] === padID);
  return (
    <Tippy placement="top" content={<div>{`${pm[0]} - ${pm[1]}`}</div>}>
      <span className={`sprite-icon sprite-icon-${padID}`} />
    </Tippy>
  );
}

export default Pokemon;
