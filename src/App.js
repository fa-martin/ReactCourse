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
const addExpense= expenseData =>{
  const expense = {...expenseData};
  console.log(expense);
}

  return (
    <div>
      <NewExpense onAddExpense={addExpense}/>
      <Expenses expenses={expenseItems}></Expenses>
      
    </div>
  );
}

export default App;
