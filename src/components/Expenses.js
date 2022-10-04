import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ items }) {
  return (
    <div className="expenses">
      {items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
