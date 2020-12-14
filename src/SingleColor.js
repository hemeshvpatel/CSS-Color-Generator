import React, { useState, useEffect } from "react";
//import rgbToHex from "./utils"; if needed

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const background = rgb.join(",");

  // const hex = rgbToHex(...rgb);

  return (
    <article
      className={`color`}
      style={{ backgroundColor: `rgb(${background})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
    </article>
  );
};

export default SingleColor;
