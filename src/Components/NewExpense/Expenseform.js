import React,{useState} from "react";
import './Expenseform.css';

const Expenseform=(props)=>{
       
       const [enteredTitle,setEnteredTitle]=useState("");
       const [enteredAmount,setEnteredAmount]=useState("");
       const [enteredDate,setEnteredDate]=useState("");
      
       const titleChangeHandler=(event)=>{
             setEnteredTitle(event.target.value);//text area me jo bhi value hogi wo enteredTitle me aa jayegi
       }
    
       const amountChangeHandler=(event)=>{
                setEnteredAmount(event.target.value);
       }
      
       const dateChangeHandler=(event)=>{
                setEnteredDate(event.target.value);
       }
       
       const submitHandler=(event)=>{
        event.preventDefault();//to stop reload 
             //creating obj to add new expense 
             //to send data obj into App.js to into array of objects to create new expense
        const ExpenseData={
             title:enteredTitle ,
             amount:enteredAmount,
             date:new Date(enteredDate)//enteredDate is a string to convert it into date form we used new Date(string);
            }
            props.onsaveExpenseData(ExpenseData);//to pass ExpenseData to it's parent(NewExpense.js)
            // console.log(ExpenseData);
        //to keep blank after add expense clicked and names corresponding vlaues
        //called two way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
     return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense-control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
                <div className="new-expense-action">
                    <button type="submit">Add Expense</button>
                </div>
        </form>
     );
}
export default Expenseform;