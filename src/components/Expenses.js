import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const[filteredYear, setFilteredYear] = useState('2020');
   
    // Practicing concept of derived state
    // let filterInfoText = '2019, 2021, & 2022';
    // if (filteredYear === '2019') {
    //   filterInfoText = '2020, 2021, & 2022';
    // } else if (filteredYear === '2020') {
    //   filterInfoText = '2019, 2021, & 2022';
    // } else if (filteredYear === '2021') {
    //   filterInfoText = '2019, 2020, & 2022';
    // } else {
    //   filterInfoText = '2019, 2020, & 2021';
    // }
    
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    return (
     <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} ></ExpensesFilter>
        {props.items.map((expense) => (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount} 
                date={expense.date}
            />
        ))}
        
    </Card>
     </div>   
    )
}
export default Expenses;