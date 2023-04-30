import "./Expenses.css";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpesesChart from "./ExpensesChart";


function Expense(props) {
  const [filterYear, setFilteredYear] = useState("2020");

  const filterExpense = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const ret = (
    <Card className="expenses">
      <ExpensesFilter Selected={filterYear} onChangeFilter={filterExpense} />
      <ExpesesChart expenses={filteredArray}></ExpesesChart>
      <ExpensesList items={filteredArray}></ExpensesList>
    </Card>
  );
  return ret;
}
export default Expense;
