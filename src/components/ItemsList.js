import Card from "./Card";
import Item from "./Item";
import "./ItemsList.css";
import ItemsChart from "./ItemsChart";
import ItemsFilter from "./ItemsFilter";
import { useState } from "react";

function ItemsList(props) {
  const [filteredYear, setYear] = useState("2023");

  const changeYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="items-list">
      <ItemsFilter
        selectedYear={filteredYear}
        onChangeYear={changeYearHandler}
      />
      {filteredItems.length === 0 && (
        <p className="items-list__fallback">No items found.</p>
      )}
      <ItemsChart items={filteredItems} />
      {filteredItems.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          cost={item.cost}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default ItemsList;
