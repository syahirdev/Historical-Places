import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="my-5 mx-auto max-w-5xl flex justify-between items-center">
      <a href="/">
        <img src="logo.svg" alt="logo" />
      </a>
      <nav>
        <ul className="flex gap-x-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/places"
              className={({ isActive }) =>
                isActive && !location.search ? 'font-bold' : ''
              }
            >
              Places
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/places?visited=true"
              className={({ isActive }) =>
                isActive && location.search.includes('visited=true')
                  ? 'font-bold'
                  : ''
              }
            >
              Visited
            </NavLink>
          </li>
          <li>
            <button>Random</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
