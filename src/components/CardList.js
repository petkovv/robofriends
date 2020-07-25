import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  const cardComponent = robots.map((item, index) => {
    return (
      <Card key={index} id={item.id} email={item.email} name={item.name} />
    );
  });
  return <div>{cardComponent}asdf</div>;
};

export default CardList;
