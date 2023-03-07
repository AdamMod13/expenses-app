import { ExpenseItemType } from "@/Models/ExpenseItemModel";
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }: any) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemType) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="bg-purple-400 m-4 p-3 rounded-md shadow-md">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
