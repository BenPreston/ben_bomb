import React from "react";

export default function card(props) {
  return (
    <div className="container_card">
      <div class="card_image">
        {" "}
        <img src={props.imgUrl} alt={props.alt || "Image"} />{" "}
      </div>
      <div class="card_title">
        <p>{props.team}</p>
      </div>
    </div>
  );
}
