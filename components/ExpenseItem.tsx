import { ExpenseItemProps } from "@/Models/ExpenseItemModel";
import React, { FC, useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem: FC<ExpenseItemProps> = ({ expenseItem }) => {

  //useState is giving us a possibility to update UI of the component where it was called
  const [title, setTitle] = useState(expenseItem.title);

  const clickHandler = (): void => {
    setTitle("Updated");
  };

  return (
    <>
      <Card>
        <div className="flex justify-between text-xl items-center shadow-xl p-2 m-4 rounded-xl bg-gray-500">
          <ExpenseDate expenseDate={expenseItem.date} />
          <h2 className="text-white font-bold mx-4 gap-4 text-base flex-1">
            {title}
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
