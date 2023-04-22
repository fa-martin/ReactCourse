import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from 'react';

function ExpenseItem(props) {
  const variableName= props.title;
  
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2> {variableName}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>      
    </Card>
  );
}

export default ExpenseItem;
