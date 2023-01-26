import ItemsList from "./components/ItemsList";
import NewItem from "./components/NewItems/NewItem";

import { useState } from "react";
const TEST_DATA = [
  {
    id: 1,
    title: "Plane Tickets",
    cost: 350,
    date: new Date("01.02.2023"),
  },
  {
    id: 2,
    title: "MacDonalds",
    cost: 10,
    date: new Date("02.08.2023"),
  },
  {
    id: 3,
    title: "Headphones",
    cost: 120,
    date: new Date("02.16.2023"),
  },
  {
    id: 4,
    title: "Chocolate Bar",
    cost: 20,
    date: new Date("02.18.2023"),
  },
  {
    id: 5,
    title: "Keyboard",
    cost: 200,
    date: new Date("03.01.2023"),
  },
  {
    id: 6,
    title: "Gamepad",
    cost: 80,
    date: new Date("01.09.2022"),
  },
  {
    id: 7,
    title: "Сoffee grinder",
    cost: 120,
    date: new Date("02.02.2022"),
  },
  {
    id: 8,
    title: "Сhair",
    cost: 100,
    date: new Date("03.12.2022"),
  },
];

const App = () => {
  const [items, setItems] = useState(TEST_DATA);

  const addItemHandler = (item) => {
    console.log(item);
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };

  return (
    <div>
      <NewItem onAddItem={addItemHandler} />
      <ItemsList items={items} />
    </div>
  );
};

export default App;
