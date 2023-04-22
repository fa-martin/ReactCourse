import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurence1",
    amount: 250.5,
    date: new Date(2023, 1, 4),
  },
  {
    id: "e2",
    title: "Car Insurence2",
    amount: 255.5,
    date: new Date(2023, 1, 4),
  },
  {
    id: "e3",
    title: "Car Insurence3",
    amount: 260.5,
    date: new Date(2023, 1, 4),
  },
];

function App() {
  const [expenseItems, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...expenseItems];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenseItems}></Expenses>
    </div>
  );
}

export default App;
