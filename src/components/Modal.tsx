import { FaXmark } from 'react-icons/fa6';
import ReactModal from 'react-modal';
import { PlaceState } from '../redux/reducers/appSlice';
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

type Props = {
  isRandom?: boolean;
  isOpen: boolean;
  closeModal: () => void;
  place: PlaceState | null;
};
export default function Modal({
  isRandom = false,
  isOpen,
  closeModal,
  place
}: Props) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="w-[85vw] max-w-xl">
        <div className="flex justify-between items-center text-xl font-bold mb-5">
          <p>
            {isRandom
              ? "Random places you might've liked!"
              : 'Historical Place'}
          </p>
          <button onClick={closeModal}>
            <FaXmark />
          </button>
        </div>
        <img
          src={`assets/${place?.image}`}
          alt={place?.name}
          className="w-full h-auto mb-5"
        />
        <div className="flex flex-col md:flex-row justify-between items-center mt-5">
          <div>
            <div className="text-2xl font-bold">{place?.name}</div>
            <div className="font-semibold">{place?.location}</div>
          </div>
          <div className="mt-3 md:mt-0">
            <VisitButton id={place?.id} />
          </div>
        </div>
        <div className="text-sm mt-3 max-w-[90%]">{place?.description}</div>
      </div>
    </ReactModal>
  );
}
