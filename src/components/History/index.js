import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowCircleLeft } from 'react-icons/fa';
import { fetchUser, fetchRepos } from '../../middlewares/index';

import Logo from '../../assets/logo.png';

import './styles.css';

function History() {

  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  var strDate = day + '/' + (month+1) + '/' + year;

  const { userHistory } = useSelector(state => state.user);
  const [username, setUsername] = useState('');

  const sortedUsers = userHistory.sort(function(a, b){
    return b.timestamp - a.timestamp;
  })

  const dispatch = useDispatch();

  function dispatchAction() {
    dispatch(fetchUser(username));
    dispatch(fetchRepos(username));
  }

  function handleClickBtn() {
    dispatchAction();
  }

  return (
    <>
      <menu className="menu-history-page">
        <img alt="logo" src={Logo} />
      </menu>
      <div className="history-container">
        <div className="history-result">
          <div className="history-headers">
            <h3>Today - {strDate}</h3>
            <Link to='/'><FaArrowCircleLeft /></Link>
          </div>
          <hr></hr>
          {sortedUsers.map(users => 
            <li key={users.id}>
              {users.login}
              <Link to='/'>
                <button 
                  value={users.login} 
                  onClick={handleClickBtn} 
                  onMouseEnter={e => setUsername(e.target.value)
                }>
                  <FaSearch />
                </button>
              </Link>
            </li>
          )}
        </div>
      </div>
    </>
  );
}

export default History;