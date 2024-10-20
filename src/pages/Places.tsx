import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import { useAppSelector } from '../redux/app/hooks';
import { PlaceState } from '../redux/reducers/appSlice';

export default function Places() {
  const { places, visited } = useAppSelector((state) => state.app);
  const [selectedPlace, setSelectedPlace] = useState<PlaceState | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const isVisitedPage = searchParams.get('visited');

  const openModal = (place: PlaceState) => {
    setSelectedPlace(place);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPlace(null);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Container */}
      <div className="max-w-sm sm:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-5">
        {places
          .filter((place) => !isVisitedPage || visited.includes(place.id))
          .map((place) => (
            <Card
              key={place.id}
              place={place}
              openModal={() => openModal(place)}
            />
          ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} place={selectedPlace} />
    </div>
  );
}
