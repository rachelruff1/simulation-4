import React from "react";
import {Link} from 'react-router-dom';

const MenuCard = props => {
  return (
    <div className="menu-card-container">
      <h3>{props.menu.title}</h3>
      <Link to={`/detail/${props.menu.id}`}>
        <button>details</button>
      </Link>
    </div>
  );
};
export default MenuCard;
