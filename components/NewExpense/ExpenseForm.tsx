import { ExpenseItemType } from "@/Models/ExpenseItemModel";
import React, { ChangeEvent, FormEvent, useState } from "react";

// Something to memorize we can use approach which is shown below or
// we can do something like this define multiple states using only one useState
// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: 0,
//   enteredDate; ''
// });
// Now we have to remember that if we want to change our values we have to update this whole object state, so we cannot do this like this
// setUserInput({enteredTitle: 'cos'}), we have to do this like this
// setUserInput((prevState) => {
//   return {...prevState, enteredTitle: 'cos'}
// })
//because react schedules updating state thats why some values could be outdated if we take this first example

const ExpenseForm = ({ onSaveExpenseData }: any) => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<number>();
  const [enteredDate, setEnteredDate] = useState<string>();
  const [isValid, setIsValid] = useState<boolean>(true)

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredAmount(Number(event.target.value));
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredDate(new Date(event.target.value).toISOString().split("T")[0]);
  };

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0 || !enteredAmount || !enteredDate) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }

    const expenseData: ExpenseItemType = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount!,
      date: new Date(enteredDate!),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount(0);
    setEnteredDate("");
  };

  return (
    <form
      className="flex flex-row justify-between items-center flex-wrap gap-2"
      onSubmit={submitHandler}
    >
      <div className="custom-input-container">
        <label className="custom-label">Title</label>
        <input
          type="text"
          className="custom-input"
          value={enteredTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) => titleChangeHandler(e)}
        />
      </div>
      <div className="custom-input-container">
        <label className="custom-label">Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="custom-input"
          value={enteredAmount}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            amountChangeHandler(e)
          }
        />
      </div>
      <div className="custom-input-container">
        <label className="custom-label">Date</label>
        <input
          type="date"
          min="2022-01-01"
          max="2024-01-01"
          className="custom-input"
          value={enteredDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => dateChangeHandler(e)}
        />
      </div>
      <div>
        <button type="submit" className="custom-button" style={{ color: !isValid ? 'red' : 'white'}}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
