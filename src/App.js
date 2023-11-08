import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersRequest } from './actions';
import { userSeletor} from './slice';
import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  const userSel = useSelector(userSeletor);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch])

  useEffect(() => {
    if(userSel.apiCalled){
      setUsers(userSel.users)
    }
  }, [userSel.apiCalled, userSel.users])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {
        userSel.apiCalling ?
          <h2>Loading...</h2>
          :
          <ul>
            {
              users.map(user => (
                <li key={user.id}>{user.first_name}</li>  
              ))
            }
          </ul>
      }
    </div>
  );
}

export default App;
