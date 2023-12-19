import React, { useState } from "react";
import "./Description.scss";

export function Description(props) {
  const [visible, setVisible] = useState(false);

  const handleCollaps = () => {
    setVisible(!visible);
  };

  return (
    <div className={`section-apartment ${visible ? 'open' : ''}`}>
      <div className="apartment__description">
        <p className="description__header" onClick={handleCollaps}>
          <span>{props.title}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </p>
        {visible && ( 
          <p className="description__content">
            {props.content}
          </p>
        )}
      </div>
    </div>
  );
}

export default Description;
