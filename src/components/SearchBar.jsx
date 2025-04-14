function SearchBar({ searchTerm, onSearchChange }) {
    return (
      <div>
        <input type="text" 
        placeholder="Search expenses..." 
         value={searchTerm}/>
      </div>
    );
  }
  
  export default SearchBar;
  