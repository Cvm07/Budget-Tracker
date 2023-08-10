import { useContext } from 'react';
import {BudgetAppContext} from './Context/context';
import { incomeCategories, expenseCategories, resetCategories } from './Constants/Categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(BudgetAppContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {    
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });
// console.log(transactionsPerType);
const filteredCategories = categories.filter((sc) => sc.amount > 0);

 const chartData = {
    // datasets would be an array for ojects
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
      borderColor:'black',
      borderWidth:0.85,
      
    }],
    labels: filteredCategories.map((c)=>c.type),
  }

  return {total, chartData};
};

export default useTransactions;