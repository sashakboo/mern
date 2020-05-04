import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logouHandler = event => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  }

  return (
    <nav>
      <div class="nav-wrapper blue darken-1 style={{ padding: '0 2rem'}}">
        <span class="brand-logo">Сокращение ссылок</span>
        <ul id="nav-mobile" class="right">
          <li><NavLink to="/create">Создать</NavLink></li>
          <li><NavLink to="/links">Ссылки</NavLink></li>
          <li><a href="/" onClick={logouHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}