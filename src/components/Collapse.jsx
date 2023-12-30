import React, { useState } from "react";
import "./Collapse.scss";

export function Description(props) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className={`section-apartment ${visible ? 'open' : ''}`}>
      <div className="conteneur" />
      <div className="apartment__description">
        <p className="description__header" onClick={toggleVisibility}>
          <span>{props.title}</span>
          <i className={`fa-sharp fa-solid fa-chevron-up ${visible ? 'open' : ''}`}></i>
        </p>
        {visible && (
          <p className={`description__content ${visible ? 'open' : ''}`}>
            {props.content}
          </p>
        )}
      </div>
    </div>
  );
}

export default Description;
