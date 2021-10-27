import { Link } from 'react-router-dom';
import { FC } from 'react-router/node_modules/@types/react';

export const Layout: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
