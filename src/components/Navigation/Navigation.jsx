import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { Suspense } from "react";


export default function  Navigation  ()  {
  const navigationClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };
  return (
    <div>
    <header className={css.container}>
      <nav className={css.box}>
        <NavLink className={navigationClass} to="/">
          Home
        </NavLink>
        <NavLink className={navigationClass} to="/movies">
          Movies
        </NavLink>
        </nav>
    </header>
    <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </div>
  );
};

