import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';


export default function NotFoundPage() {
  return (
    <div>
      <p>Page not found!</p>
      <Link to="/">Home Page</Link>
    </div>
  );
}