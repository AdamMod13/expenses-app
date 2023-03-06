import React from "react";

const ExpenseForm = () => {
  return (
    <form className="flex flex-row ">
      <div className="flex-1">
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
      </div>
      <div className="flex-1">
        <div>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div>
        <div>
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2024-01-01" />
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
