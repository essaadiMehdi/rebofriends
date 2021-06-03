import React from "react";

const Card = ({ id, name, email }) => (
  <div className="br3 pa3 dib ma2 grow bg-light-green bw2 shadow-5">
    <img src={`https://robohash.org/${id}?200x200`} alt="rebots{id}" />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

Card.propTypes = {
  // bla: PropTypes.string,
};

Card.defaultProps = {
  // bla: 'test',
};

export default Card;
