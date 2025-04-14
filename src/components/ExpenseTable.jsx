import ExpenseRow from "./ExpenseRow";

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <ExpenseRow 
          key={index} 
          expense={expense} 
          onDelete={() => onDelete(index)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
