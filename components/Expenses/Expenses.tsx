import { ExpenseItemArrayProps, ExpenseItemType } from "@/Models/ExpenseItemModel";
import React, { FC, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses: FC<ExpenseItemArrayProps> = ({ expensesItemArray }) => {
  //We should always use key property for mapping because its prevents from bugs and its more efficient
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expensesItemArray.filter((expense: ExpenseItemType) => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <div className="flex flex-col mx-4 bg-slate-300 shadow-md rounded-xl">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expensesItemArray={filteredExpenses}/>
      <ExpensesList expensesItemArray={filteredExpenses} />
    </div>
  );
};

export default Expenses;
