import React, { ChangeEvent } from 'react'

const ExpensesFilter = ({onChangeFilter, selected}: {onChangeFilter: any, selected: string}) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>)  => {
    onChangeFilter(event.target.value);
  }
  return (
    <div>
      <div className='flex justify-between text-xl items-center p-3 mx-4 mt-3'>
        <label className='font-bold text-black'>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler} className="p-1 rounded-sm">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
