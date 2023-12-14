import React from "react";
import "./Description.scss";

export function Description(props) {

  //const [visible, setContentVisible]=useState(false)
  return (
    <div className="section-apartment">
      <div className="apartment__description">
        <p className="description__header">
          <span>{props.title}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </p>
        <p className="description__content">
          {props.content} 
        </p>
      </div>
    </div>
  );
}
export default Description;
