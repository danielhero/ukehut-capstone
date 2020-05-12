import React from "react";

export default (props) => (
  <section className="ukulele">
    <div className="ukulele__imageDiv">
      <img className="ukulele__image" src={props.ukulele.image} />
    </div>
    <div className="ukulele__makeModel">
      {props.ukulele.make} {props.ukulele.model}
    </div>
    <div className="ukulele__size">Size: {props.ukeSize.size}</div>
    <div className="ukulele__shape">Body Shape: {props.ukeShape.shape}</div>
  </section>
);
