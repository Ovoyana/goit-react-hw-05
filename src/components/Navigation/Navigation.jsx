import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { Suspense } from "react";

const navigationClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};
export default function  Navigation  ()  {

  return (
    <div>
    <header className={css.box}>
      
        <NavLink className={navigationClass} to="/">
          Home
        </NavLink>
        <NavLink className={navigationClass} to="/movies">
          Movies
        </NavLink>
    </header>
    <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </div>
  );
};

