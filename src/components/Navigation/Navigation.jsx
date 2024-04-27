import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import clsx from 'clsx';


export default function  Navigation  ()  {
  const navigationClass = ({ isActive }) => {
    return clsx(style.navLink, isActive && style.navLinkActive);
  };

  return (
    <header className={style.container}>
      <nav className={style.headerNav}>
        <NavLink className={navigationClass} to="/">
          Home
        </NavLink>
        <NavLink className={navigationClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

