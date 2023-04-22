import "./Expenses.css";
import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

function Expense(props) {
  const [filterYear,setFilteredYear]=useState('2020');

  const filterExpense = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const ret = (
    <Card className="expenses">
      <ExpensesFilter Selected={filterYear} onChangeFilter={filterExpense} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
    </Card>
  );
  return ret;
}
export default Expense;
