import "./ItemsFilter.css";

const ItemsFilter = (props) => {
  const changeYearHandler = (event) => {
    props.onChangeYear(event.target.value);
  };
  return (
    <div className="items-filter">
      <div className="items-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={changeYearHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ItemsFilter;
