import React from "react";

const Card = props => {
  const { name, email, id } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow tc shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}ivan</p>
      </div>
    </div>
  );
};

export default Card;
