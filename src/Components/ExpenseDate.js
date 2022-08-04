import './ExpenseDate.css';
function ExpenseDate(props){

    const year=props.date.getFullYear();
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});

    return (
        <div className='expense-date'>
             <div className='expense-day'>{day} </div>
            <div className='expense-month'> {month}</div>
            <div className='expense-year' >{year}</div>
        </div>
    );
}
export default ExpenseDate;