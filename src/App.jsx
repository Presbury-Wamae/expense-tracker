import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import SearchBar from "./components/SearchBar";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm />
      <SearchBar />
      <ExpenseTable expenses={expenses} />
    </div>
  );
}

export default App
