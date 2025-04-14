function ExpenseRow({ expense, onDelete }) {
    return (
      <tr>
        <td>{expense.description}</td>
        <td>{expense.amount.toFixed(2)}</td>
        <td>{expense.category}</td>
        <td>
          <button onClick={onDelete}>Delete</button>
        </td>
      </tr>
    );
  }
  
  export default ExpenseRow;
  