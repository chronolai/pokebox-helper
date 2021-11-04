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

  const width = 68 *6;
  const wrapperStyle = {
    width: `${width}px`,
    textAlign: 'center',
    margin: '0 auto',
    padding: '10px',
    boxSizing: 'content-box',
    border: '1px solid #d7d7d7',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  };
  const boxStyle = {
    width: `${width}px`,
  };

  return (
    <div>
      <div style={wrapperStyle}>
        <h2>{title}</h2>
        <div style={boxStyle}>
          {[...box, ...remain].map((id, idx) => {
            return <Pokemon key={idx} id={id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Box;
