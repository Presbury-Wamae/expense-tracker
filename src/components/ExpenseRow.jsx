function ExpenseRow({ expense }) {
    return (
      <tr>
        <td>{expense.description}</td>
        <td>{expense.amount}</td>
        <td>{expense.category}</td>
      </tr>
    );
  }
  
  export default ExpenseRow;
  