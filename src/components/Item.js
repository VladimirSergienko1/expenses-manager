import { useState } from "react";

import "./Item.css";
import CalendarDate from "./CalendarDate";
import Card from "./Card";

const Item = (props) => {
  const [title] = useState(props.title);

  return (
    <Card className="item">
      <CalendarDate date={props.date} />
      <div className="item__description">
        <h2>{title}</h2>
        <div className="item__price">${props.cost}</div>
      </div>
    </Card>
  );
};

export default Item;
