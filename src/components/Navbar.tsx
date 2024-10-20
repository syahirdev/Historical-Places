import { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../redux/app/hooks';
import { PlaceState } from '../redux/reducers/appSlice';
import { getSingleRandomElement } from '../utils';
import Modal from './Modal';

export default function Navbar() {
  const { places, visited } = useAppSelector((state) => state.app);
  const [selectedPlace, setSelectedPlace] = useState<PlaceState | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
