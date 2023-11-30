
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import SearchBox from './components/SearchBox';
import axios from 'axios'
import User from './components/User';


const App = () => {
  const [users, setUser] = useState([]);

  const searchUser = async (query) => {
    try {

      const res = await axios.get(`https://api.github.com/search/users?q=${query}`)

      setUser(res.data.items);
      console.log(res.data.items)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <Home />
      <SearchBox onSearch={searchUser} />
      <User users={users} />
    </div>
  );
}

export default App;
