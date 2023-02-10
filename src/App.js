import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Github Users search </h1>
      <div className='searchform'> 
      <select name="searchby" id="searchby">
        <option value="login">Login</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>

      <input type="text" name="search" id="search" placeholder="Search by login, name or email" />
      <button type="button" id="searchbtn">Search</button>

      </div>
    </div>
  );
}

export default App;
