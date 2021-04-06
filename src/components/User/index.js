import React, { useState, useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, fetchRepos } from '../../middlewares';
import { FaSearch } from 'react-icons/fa';

import Header from '../Header/index';
import Logo from '../../assets/logo.png';

import './styles.css';

function User() {
    const [inputValue, setInputValue] = useState('');
    const refBtn = useRef();
    const refInput = useRef();
    const refSec = useRef();
    
    const {request, user, error, userRepos} = useSelector(state => state.user);

    const dispatch = useDispatch();

    function dispatchAction() {
      dispatch(fetchUser(inputValue));
      dispatch(fetchRepos(inputValue));
    }

    function handleKeyPress(e) {
      if (e.key === "Enter"){
        dispatchAction();
        setInputValue('');
      }
    }

    useEffect(() => {
      const { current } = refBtn;

      const handleClick = () => {
        refSec.current.classList.toggle('active');
        refInput.current.focus()
      }
      if(current) {
        current.addEventListener('click', handleClick);
      }
      return () => {
        if(current) {
          current.removeEventListener('click', handleClick);
        }
      }
    })

    if(request === true) {
      return <div className="div-boundaries">Loading..</div>
    }

    if(error) {
      return <div className="div-boundaries">Request Failed</div>
    }

    if(user.message === "Not Found") {
      return <div className="div-boundaries">User not found!</div>
    }

  return (
    <>
      <menu className="menu-search-page">
        <img alt="logo" src={Logo} className="logo-img" />
        <section ref={refSec} className="search">
          <input
            ref={refInput}
            className="input" 
            type="text" 
            defaultValue={inputValue} 
            onChange={e => setInputValue(e.target.value)} 
            onKeyPress={handleKeyPress} 
            placeholder="Enter a username" 
          />

          <button ref={refBtn} className="btn">
            <FaSearch />
          </button>

          <Header/>
        </section>
      </menu>

      <div className="vl"></div>

      <div className="data-container">
        <div className="profile-container">
          <aside className="profile-data">

            <img alt="" src={user.avatar_url}/>

            <div className="title">
              <strong>{user.name}</strong>
              <text>{user.login}</text>
            </div>
            
            <div className="info">
              <text>{user.html_url}</text>
              <text>{user.bio}</text>
              <text>{user.email}</text>
            </div>

          </aside>
        </div>

        <div className="repo-container">
          <div className="repo-data">
            {userRepos.map(repos => <div className="repo-box">
              <strong>{repos.name}</strong>
              <p>{repos.description}</p>
              <p>{repos.language}</p>
              <p>{repos.url}</p>
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;