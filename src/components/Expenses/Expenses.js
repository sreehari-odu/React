import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';


const Expenses = (data) => {
    return <Card className="expenses">
         <ExpenseItem
        title={data.item[0].title}
        amount={data.item[0].amount} 
        date={data.item[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={data.item[1].title}
        amount={data.item[1].amount}
        date={data.item[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={data.item[2].title}
        amount={data.item[2].amount}
        date={data.item[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={data.item[3].title}
        amount={data.item[3].amount}
        date={data.item[3].date}
      ></ExpenseItem>
    </Card>
    

}

export default Expenses;