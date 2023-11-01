import React from "react";
import "./LoginButtons.scss";
export default function LoginButtons({ name, btnImage, className }) {
  return (
    <React.Fragment>
      <button className={`LoginButtons ${className}`}>
        {btnImage && <img src={btnImage} alt="btnImage" />}
        {name}
      </button>
    </React.Fragment>
  );
}
