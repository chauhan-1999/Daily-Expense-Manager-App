import Expense from "./Components/Expense.js";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense.js";
let arr=[
    {
        id:'e1',
        title:'Hostel Rent',
        amount:'25000',
        date:new Date(2022,3,14)

    },
    {
        id:'e2',
        title:'Other expense',
        amount:'2000',
        date:new Date(2022,4,20)

    },
    {
        id:'e3',
        title:'Mess Fee',
        amount:'10000',
        date:new Date(2022,3,14)

    },
    {
        id:'e4',
        title:'College Fee',
        amount:'5000',
        date:new Date(2022,5,15)

    }
];
function App(){
    // we can also write js code here 
    // let expenseDate=new Date(2022,6,14);
    // let expenseTitle="Semester Fees";
    // let expenseAmount=10000;
    //if we have more than one data
    //then we create a array of obj
    const [expenses,setExpenses]=useState(arr);
    const AddExpenseHandler=(expense)=>{
        const upadatedExpense=[expense, ...expenses];
        setExpenses(upadatedExpense);
    }
    return (
        <div>
            <h2>Add Expenses</h2>
            <NewExpense onAddExpense={AddExpenseHandler}/>
              <Expense item={expenses}/>
        </div>

    ); 
}
//to use in another file
export default App;