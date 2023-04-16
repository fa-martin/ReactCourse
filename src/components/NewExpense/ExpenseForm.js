import "./ExpenseForm.css";
import React , { useState } from 'react';

const ExpenseForm = () => {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('2023-01-01');
    const [UserImput, setUserImput]=useState ({title:'',amount:'',date:''});

    const titleChangeHanler = (event)=>{
        setUserImput({
            ...UserImput,
            title: event.target.value
        });
    }
    const amountChangeHanler = (event)=>{
        //setAmount(event.target.value);
        setUserImput({ 
            ...UserImput,
            amount: event.target.value
        });
    }
    const dateChangeHanler = (event)=>{
        setUserImput({
            ...UserImput,
            date: event.target.value
        });
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHanler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min={0.01} step={0.01} onChange={amountChangeHanler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023 - 01 - 01"max="2023 - 12 - 31" onChange={dateChangeHanler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
