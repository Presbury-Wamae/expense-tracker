import { useState } from "react";
function ExpenseForm({ onAddExpense }) {
        const [description, setDescription] = useState("");
        const [amount, setAmount] = useState("");
        const [category, setCategory] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          const newExpense = {
            description,
            amount: parseFloat(amount),
            category
          };
      
          onAddExpense(newExpense); // send new expense to App
      
          // Reset form fields
          setDescription("");
          setAmount("");
          setCategory("");
        };
    
    
    
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        <div>
            <label>Description: </label>
            <input
            type="text"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Amount: </label>
            <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            />
        </div>
        
    <div>
        <label>Category: </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required>
          <option value="">-- Select Category --</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
    </div>
    <button type="submit">Add Expense</button>
      </form>
    );
  }
  
  export default ExpenseForm;
  