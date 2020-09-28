import React from "react";
import Card from "./Card";

export default function cardContainer({ cards }) {
  return (
    <div className="cards-list">
      {/* {props.cards.map((card) => ( */}
      <Card title={cards[0].team} imgUrl={cards[0].imgUrl} />
      <Card imgUrl="https://upload.wikimedia.org/wikipedia/commons/f/f6/Versus_sign.png" />
      <Card title={cards[1].team} imgUrl={cards[1].imgUrl} />

      {/* ))} */}
    </div>
  );
}
