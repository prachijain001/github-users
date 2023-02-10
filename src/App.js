import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const token = "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"
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [searchby, setSearchby] = useState('login');

  const profileCards = (image,login,email) => {
    return (
      <div className="profilecard">
        <img src={image} alt="profile" className='pfimg'/>
        <h3>{login}</h3>
        <p>{email}</p>
      </div>
    )
  }



  useEffect(() => {
    
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
    fetch('https://api.github.com/search/users?q='+search)
    .then(res => res.json())
    .then(data => {
      setUsers(data.items);
      console.log(data);
    })
    
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
      <div className="profilecards">
        {users.map(user => profileCards(user.avatar_url, user.login, user.email))}
      </div>
    </div>
  );
}

export default App;
