import { useState } from 'react';
import { BsGrid, BsGridFill, BsStars } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../redux/app/hooks';
import { PlaceState } from '../redux/reducers/appSlice';
import { getSingleRandomElement } from '../utils';
import Modal from './Modal';

export default function Navbar() {
  const { places, visited } = useAppSelector((state) => state.app);
  const [selectedPlace, setSelectedPlace] = useState<PlaceState | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openModal = () => {
    const randomPlace = getSingleRandomElement(places);
    setSelectedPlace(randomPlace);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPlace(null);
    setIsOpen(false);
  };

  return (
    <>
      <header className="px-5 my-5 mx-auto max-w-5xl flex justify-between items-center">
        <a href="/">
          <img src="logo.svg" alt="logo" />
        </a>
        <nav className="hidden sm:block">
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
                  `relative ${
                    isActive && location.search.includes('visited=true')
                      ? 'font-bold'
                      : ''
                  }`
                }
              >
                <p>Visited</p>
                <span className="absolute -top-2 -right-4 inline-flex items-center justify-center font-normal bg-red-500 text-white text-xs w-5 h-5 rounded-full ml-2">
                  {visited.length}
                </span>
              </NavLink>
            </li>
            <li>
              <button className="flex group" onClick={openModal}>
                Random
                <div className="relative">
                  <BsStars />
                  <div className="group-hover:animate-ping absolute inset-0">
                    <BsStars />
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className="relative sm:hidden">
          <button
            className="block"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            {isNavbarOpen ? <BsGridFill size={30} /> : <BsGrid size={30} />}
          </button>
          {isNavbarOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 border border-neutral-100">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 ${
                    isActive ? 'font-bold' : 'text-gray-800'
                  } hover:bg-gray-200`
                }
                onClick={() => setIsNavbarOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/places"
                className={({ isActive }) =>
                  `block px-4 py-2 ${
                    isActive ? 'font-bold' : 'text-gray-800'
                  } hover:bg-gray-200`
                }
                onClick={() => setIsNavbarOpen(false)}
              >
                Places
              </NavLink>
              <NavLink
                to="/places?visited=true"
                className={({ isActive }) =>
                  `px-4 py-2 flex items-center ${
                    isActive && location.search.includes('visited=true')
                      ? 'font-bold'
                      : 'text-gray-800'
                  } hover:bg-gray-200`
                }
                onClick={() => setIsNavbarOpen(false)}
              >
                Visited
                <span className="flex items-center justify-center font-normal bg-red-500 text-white text-xs w-5 h-5 rounded-full ml-2">
                  {visited.length}
                </span>
              </NavLink>
              <button
                className="flex items-center gap-x-1 w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={openModal}
              >
                Random
                <BsStars />
              </button>
            </div>
          )}
        </nav>
      </header>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        place={selectedPlace}
        isRandom
      />
    </>
  );
}
