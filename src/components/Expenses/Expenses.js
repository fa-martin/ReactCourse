import "./Expenses.css";
import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

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
      {filteredArray.length === 0 ? (
        <p>No Expenses found.</p>
      ) : (
        filteredArray.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )}
    </Card>
  );
  return ret;
}
export default Expense;
