import React from 'react';
import './NewExpense.css';
import Expenseform from './Expenseform';

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
          //copy into another obj using speread operator
          const ExpenseData={
            ...enteredExpenseData,
            id:Math.random().toString(),
          }
          props.onAddExpense(ExpenseData);//to pass ExpenseData to it's parent(App.js)
        //   console.log(ExpenseData);
    }
    return (
        <div className='new-expense'>
        <Expenseform onsaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;