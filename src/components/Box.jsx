import React from "react";

import Pokemon from "./Pokemon";
import pokedex from "../pokedex";

const BOX_SIZE = 30;

function Box(props) {
  const { dexid, index, title } = props;

  const dex = pokedex?.[dexid] ?? "national";
  const box = Array.from(Array(Math.ceil(dex.length / BOX_SIZE)).keys()).map(
    (i) => {
      const offset = BOX_SIZE * i;
      return dex.slice(offset, offset + BOX_SIZE);
    }
  )[index];
  const remain = Array.from(Array(BOX_SIZE - box.length)).map(() => "000");

  const width = (68 - 15) * 6;
  const boxStyle = {
    width: `${width}px`,
  };

  return (
    <div className="box" style={boxStyle}>
      <h2>{title}</h2>
      <div style={boxStyle}>
        {[...box, ...remain].map((id, idx) => {
          return <Pokemon key={idx} id={id} />;
        })}
      </div>
    </div>
  );
}

export default Box;
