import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import ReactModal from 'react-modal';
import VisitButton from './VisitButton';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)'
  }
};

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
    >
      <div>
        <div className="flex justify-between items-center text-xl font-bold mb-5">
          <p>Random places you might've liked!</p>
          <button>
            <FaXmark />
          </button>
        </div>
        <img src="assets/colosseum.png" alt="colosseum" />
        <div className="flex justify-between items-center mt-5">
          <div>
            <div className="text-2xl font-bold">Colosseum</div>
            <div className="font-semibold">Rome, Italy</div>
          </div>
          <div>
            <VisitButton />
          </div>
        </div>
        <div className="text-sm mt-3">
          The Colosseum is an ancient amphitheater in Rome, famous for
          gladiatorial contests and public spectacles.
        </div>
      </div>
    </ReactModal>
  );
}
