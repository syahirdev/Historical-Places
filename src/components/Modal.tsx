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
    >
      <div>
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
        <img src={`assets/${place?.image}`} alt="colosseum" />
        <div className="flex justify-between items-center mt-5">
          <div>
            <div className="text-2xl font-bold">{place?.name}</div>
            <div className="font-semibold">{place?.location}</div>
          </div>
          <div>
            <VisitButton id={place?.id} />
          </div>
        </div>
        <div className="text-sm mt-3">{place?.description}</div>
      </div>
    </ReactModal>
  );
}
