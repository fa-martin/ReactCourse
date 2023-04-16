import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseItems = [
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
  return (
    <div>
      <NewExpense/>
      <Expenses expenses={expenseItems}></Expenses>
      {/* <ExpenseItem
        title={expenseItems[0].title}
        amount={expenseItems[0].amount}
        date={expenseItems[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseItems[1].title}
        amount={expenseItems[1].amount}
        date={expenseItems[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseItems[2].title}
        amount={expenseItems[2].amount}
        date={expenseItems[2].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
