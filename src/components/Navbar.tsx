import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../redux/app/hooks';
import { PlaceState } from '../redux/reducers/appSlice';
import { getSingleRandomElement } from '../utils';
import Modal from './Modal';

export default function Navbar() {
  const { places } = useAppSelector((state) => state.app);
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
          <div className="opacity-0 sm:opacity-100">sm</div>
          <div className="opacity-0 md:opacity-100">md</div>
          <div className="opacity-0 lg:opacity-100">lg</div>
          <div className="opacity-0 xl:opacity-100">xl</div>
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
              <button onClick={openModal}>Random</button>
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
