import React from "react";
import Card from "../Card/Card";
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card key={i} name={user.name} email={user.email} id={user.id} />
        );
      })}
    </div>
  );
};

CardList.propTypes = {
  // bla: PropTypes.string,
};

CardList.defaultProps = {
  // bla: 'test',
};

export default CardList;
