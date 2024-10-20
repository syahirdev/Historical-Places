import { useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import { useAppSelector } from '../redux/app/hooks';
import { PlaceState } from '../redux/reducers/appSlice';

export default function Places() {
  const { places } = useAppSelector((state) => state.app);
  const [selectedPlace, setSelectedPlace] = useState<PlaceState | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3 px-5">
        {places.map((place) => (
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
