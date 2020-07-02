import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/Header.scss';
import user from '../assets/static/user-male.png';
import map from '../assets/static/music-video.png';

const Header = () => (
  <header className='header'>

    <Link to='/home'>
      <img className='header__img' src={map} alt='logo' />
    </Link>

    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={user} alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
