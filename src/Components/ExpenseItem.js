import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React from 'react';
 function ExpenseItem(props){//props=obj to fetch data 
   
    return (
        <div className='expense-item'>
             <ExpenseDate date={props.date}/>
            <div className='expense-item-description'>
                <h2 >{props.title}</h2>
                <div className='expense-item-price'>₹{props.amount}</div>
            </div>
        </div>
    );
 }

 export default ExpenseItem;