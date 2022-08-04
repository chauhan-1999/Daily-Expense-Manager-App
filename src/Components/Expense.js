import './Expense.css';
import ExpenseItem from './ExpenseItem';
function Expense(props){
    return (
        <div className='Expense'>
        {
            props.item.map(
                expense=>(
                    
                    <ExpenseItem
                    key={expense.id}//to avoid errors (to make easy to rendering )
                    date= {expense.date}
                    title={expense.title} 
                    amount={expense.amount}
                    />
                    
                    )
                )
       }
        </div>
    );
}
export default Expense;