import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2023,1,4);
    const expenseTittle = "Car Insurence";
    const expenseAmount = 250.5;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {expenseTittle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
