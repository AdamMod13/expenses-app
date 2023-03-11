import { ExpenseItemArrayProps, ExpenseItemType } from '@/Models/ExpenseItemModel';
import React, { FC } from 'react'
import ExpenseItem from './ExpenseItem';

const ExpensesList: FC<ExpenseItemArrayProps> = ({expensesItemArray}) => {

  if (expensesItemArray.length === 0) {
    return <h2 className='p-2 m-4 font-bold'>No expenses found.</h2>
  };

  return (
    <ul>
      {expensesItemArray.map((item: ExpenseItemType) => (
        <ExpenseItem key={item.id} expenseItem={item} />
      ))}
    </ul>
  )
}

export default ExpensesList
