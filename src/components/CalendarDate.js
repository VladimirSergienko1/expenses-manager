import "./CalendarDate.css";
function CalendarDate(props) {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="item-date">
      <div className="item-date__day">{day}</div>
      <div className="item-date__month">{month}</div>
      <div className="item-date__year">{year}</div>
    </div>
  );
}

export default CalendarDate;
