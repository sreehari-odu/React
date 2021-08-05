import React ,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (data) => {
  const [title, setTitle]  = useState(data.title);
  
  const clickHandler = () =>{
    setTitle('updating'); 
    console.log(title);
  };

    // return React.createElement('Card',{className:expense-item},
    // React.createElement('ExpenseDate',{date: data.date}),
    // React.createElement('div',{className: expense-item__descrition}),
    // React.createElement('h2', data.title),
    // React.createElement('div') );

  return (
    <Card className="expense-item">
      <ExpenseDate date = {data.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${data.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
