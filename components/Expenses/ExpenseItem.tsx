import { ExpenseItemProps } from "@/Models/ExpenseItemModel";
import React, { FC } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem: FC<ExpenseItemProps> = ({ expenseItem }) => {

  return (
    <>
      <Card>
        <div className="flex justify-between text-xl items-center shadow-xl p-2 m-4 rounded-xl bg-gray-500">
          <ExpenseDate expenseDate={expenseItem.date} />
          <h2 className="text-white font-bold mx-4 gap-4 text-base flex-1">
            {expenseItem.title}
          </h2>
          <div className="flex items-center">
            <div className="text-base font-bold text-white bg-purple-600 border-solid border-2 border-white p-2 rounded-xl">
              ${expenseItem.amount}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ExpenseItem;
