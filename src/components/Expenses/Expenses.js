import "./Expenses.css";
import "./ExpenseItem.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"

function Expense(props) {
  const ret= <Card className="expenses">
    <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
  </Card>;
  return ret;
}
export default Expense;
