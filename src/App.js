import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [searchby, setSearchby] = useState('login');

  useEffect(() => {
    // fetch('https://api.github.com/users')
    // .then(res => res.json())
    // .then(data => {
    //   setUsers(data);
    //   console.log(data);
    // })
    console.log(searchby, search, users);
  }, []);

  const handleSearchBy = (e) => {
    setSearchby(e.target.value);
    // console.log(searchby);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(searchby);
  }

  const handleSubmit = (e) => {
    console.log(searchby, search, users);
    // console.log(searchby);
  }

  return (
    <div className="App">
      <h1> Github Users search </h1>
      <div className='searchform'> 
      <select name="searchby" id="searchby" onChange={handleSearchBy}>
        <option value="login">Login</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>

      <input type="text" name="search" id="search" placeholder="Search by login, name or email" onChange={handleSearch}/>
      <button type="button" id="searchbtn" onClick={handleSubmit}>Search</button>

      </div>
    </div>
  );
}

export default App;
